<template>

  <div id="supporters">
    <div class="w-md-75 w-lg-80 space-1 mx-md-auto" style="background-color: black;">
      <h1>RANKING</h1>
      <br/>
      <table style="width:100%;">
        <tr>
          <th>RANK</th>
          <th>SCORE</th>
          <th>NAME</th>
        </tr>
        <tr style="color: #A569BD;">
          <td>1st</td>
          <td>0016400</td>
          <td>Saul Alanis</td>
        </tr>
        <tr style="color: #5499C7;">
          <td>2nd</td>
          <td>0013800</td>
          <td>Johannes Bachstaedter</td>
        </tr>
        <tr style="color: #5DADE2;">
          <td>3rd</td>
          <td>0010000</td>
          <td>Cuyler Berg</td>
        </tr>
        <tr style="color: #48C9B0;">
          <td>4th</td>
          <td>0009000</td>
          <td>Jeremy Giles</td>
        </tr>
        <tr style="color: #45B39D;">
          <td>5th</td>
          <td>0009000</td>
          <td>Eric Blackwell</td>
        </tr>
        <tr style="color: #58D68D;">
          <td>6th</td>
          <td>0006300</td>
          <td>The Strays</td>
        </tr>
        <tr style="color: #F4D03F;">
          <td>7th</td>
          <td>0006000</td>
          <td>Shawn Doyle</td>
        </tr>
        <tr style="color: #F5B041;">
          <td>8th</td>
          <td>0005000</td>
          <td>JR</td>
        </tr>
        <tr style="color: #EB984E;">
          <td>9th</td>
          <td>0004500</td>
          <td>Joseph Beaudry</td>
        </tr>
        <tr style="color: #DC7633;">
          <td>10th</td>
          <td>0003600</td>
          <td>Murriel Perez</td>
        </tr>
        <tr>
          <td>11th</td>
          <td>0003500</td>
          <td>Luke Brady</td>
        </tr>
        <tr>
          <td>12th</td>
          <td>0002500</td>
          <td>Jerome Vanherpe</td>
        </tr>
        <tr>
          <td>13th</td>
          <td>0002400</td>
          <td>Krishna Gkashyap</td>
        </tr>
        <tr>
          <td>14th</td>
          <td>0002000</td>
          <td>Vinit Khandagle</td>
        </tr>
        <tr>
          <td>15th</td>
          <td>0001600</td>
          <td>Naga Prasady</td>
        </tr>
        <tr>
          <td>16th</td>
          <td>0001500</td>
          <td>Una Karlsen</td>
        </tr>
        <tr>
          <td>17th</td>
          <td>0001500</td>
          <td>Clinon Baxley</td>
        </tr>
        <tr>
          <td>18th</td>
          <td>0001200</td>
          <td>Wayne Chen</td>
        </tr>
        <tr>
          <td>19th</td>
          <td>0001100</td>
          <td>SecurityReview.io</td>
        </tr>
        <tr>
          <td>20th</td>
          <td>0000800</td>
          <td>Bruce Olson</td>
        </tr>
        <tr>
          <td>21th</td>
          <td>0000500</td>
          <td>Oriol Matavacas</td>
        </tr>
        <tr>
          <td>22th</td>
          <td>0000500</td>
          <td>Wojciech Sciesinski</td>
        </tr>
        <tr>
          <td>23th</td>
          <td>0000400</td>
          <td>Kim Agliardi</td>
        </tr>
        <tr>
          <td>24th</td>
          <td>0000100</td>
          <td>Shankar Narayan</td>
        </tr>
        <tr>
          <td>25th</td>
          <td>0000100</td>
          <td>Bapi Loya</td>
        </tr>
        <tr>
          <td>26th</td>
          <td>0000100</td>
          <td>Rajesh Gotur</td>
        </tr>
      </table>
      <br/><br/><br/>
      <g-link to="https://www.patreon.com/devopslibrary">
        <h3 style="color: orange;">Want on the list?  Click here to donate! :)</h3>
      </g-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Supporters.vue",
    metaInfo: {
      title: 'Supporters'
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  #supporters {
    background-color: black;
    min-height: 800px;
    padding-top: 20px;
    text-align: center;
  }
  #supporters h1, h3 {
    color: #00dffc;
    font-family: 'Press Start 2P', cursive;
  }
  #supporters table {
    table-layout: fixed;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    color: white;
  }
</style>
