# Create Temp Folder
if ($env:TEMP -eq $null) {
  $env:TEMP = Join-Path $env:SystemDrive 'temp'
}
$chocTempDir = Join-Path $env:TEMP "saltstack"
$tempDir = Join-Path $chocTempDir "saltInstall"
if (![System.IO.Directory]::Exists($tempDir)) {[System.IO.Directory]::CreateDirectory($tempDir)}
$file = Join-Path $tempDir "salt-minion.exe"

# Find latest version of Salt Minion 
$repo = Invoke-Restmethod 'http://repo.saltstack.com/windows/'
$regex = "<\s*a\s*[^>]*?href\s*=\s*[`"']*([^`"'>]+)[^>]*?>"
$returnMatches = new-object System.Collections.ArrayList
$resultingMatches = [Regex]::Matches($repo, $regex, "IgnoreCase")
foreach($match in $resultingMatches)
{
    $cleanedMatch = $match.Groups[1].Value.Trim()
    [void] $returnMatches.Add($cleanedMatch)
} 
$64bit = (Get-WmiObject -Class Win32_ComputerSystem).SystemType -match ‘(x86)’ # Get OS Architecture
if ($64bit) {$returnMatches = $returnMatches | Where {$_ -like "Salt-Minion*AMD64-Setup.exe"}}
else {$returnMatches = $returnMatches | Where {$_ -like "Salt-Minion*x86-Setup.exe"}}
$fileURL = "http://repo.saltstack.com/windows/$(($returnMatches | Sort-Object -Descending)[0])"
$fileURL

# Download File
Write-Output "Downloading $url to $file"
  $downloader = new-object System.Net.WebClient

  $defaultCreds = [System.Net.CredentialCache]::DefaultCredentials
  if ($defaultCreds -ne $null) {
    $downloader.Credentials = $defaultCreds
  }

  # check if a proxy is required
  $explicitProxy = $env:chocolateyProxyLocation
  $explicitProxyUser = $env:chocolateyProxyUser
  $explicitProxyPassword = $env:chocolateyProxyPassword
  if ($explicitProxy -ne $null) {
    # explicit proxy
  $proxy = New-Object System.Net.WebProxy($explicitProxy, $true)
  if ($explicitProxyPassword -ne $null) {
    $passwd = ConvertTo-SecureString $explicitProxyPassword -AsPlainText -Force
    $proxy.Credentials = New-Object System.Management.Automation.PSCredential ($explicitProxyUser, $passwd)
  }

  Write-Output "Using explicit proxy server '$explicitProxy'."
    $downloader.Proxy = $proxy

  } elseif (!$downloader.Proxy.IsBypassed($url))
  {
  # system proxy (pass through)
    $creds = $defaultCreds
    if ($creds -eq $null) {
      Write-Debug "Default credentials were null. Attempting backup method"
      $cred = get-credential
      $creds = $cred.GetNetworkCredential();
    }
    $proxyaddress = $downloader.Proxy.GetProxy($url).Authority
    Write-Output "Using system proxy server '$proxyaddress'."
    $proxy = New-Object System.Net.WebProxy($proxyaddress)
    $proxy.Credentials = $creds
    $downloader.Proxy = $proxy
  }

  $downloader.DownloadFile($url, $file)