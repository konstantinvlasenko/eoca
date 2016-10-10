<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">EOCA Grand Prix Champions</span>
      <ul class="collection">
        <li class="collection-item" v-for="player in players">
        <span>{{ player.season }}</span>
        <span class="right">{{ player.name }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: [
      { season: '2015/2016', name: 'GM Bator Sambuev' },
      { season: '2014/2015', name: 'GM Bator Sambuev' },
      { season: '2013/2014', name: 'William Doubleday' },
      { season: '2012/2013', name: 'Kevin Pacey' },
      { season: '2011/2012', name: 'FM Robert Hamilton' },
      { season: '2010/2011', name: 'GM Bator Sambuev' },
      { season: '2009/2010', name: 'GM Bator Sambuev' },
      { season: '2008/2009', name: 'William Doubleday' },
      { season: '2007/2008', name: 'David Gordon' },
      { season: '2006/2007', name: 'David Gordon' },
      { season: '2005/2006', name: 'David Gordon' },
      { season: '2004/2005', name: 'Marc Cazelais' },
      { season: '2003/2004', name: 'Miladin Djerkovic' },
      { season: '2002/2003', name: 'Sebastian Predescu' },
      { season: '2001/2002', name: 'Mihnea Voloaca' },
      { season: '2000/2001', name: 'Miladin Djerkovic' },
      { season: '1999/2000', name: 'IM Deen Hergott & IM Tom O\'Donnell' },
      { season: '1998/1999', name: 'IM Deen Hergott' },
      { season: '1997/1998', name: 'IM Deen Hergott & FM Michael Schleifer' },
      { season: '1996/1997', name: 'IM Deen Hergott' },
      { season: '1995/1996', name: 'FM Glenn Johnstone' },
      { season: '1994/1995', name: 'FM Gordon Taylor' },
      { season: '1993/1994', name: 'FM Gordon Taylor' },
      { season: '1992/1993', name: 'IM Deen Hergott' },
      { season: '1991/1992', name: 'IM Deen Hergott' },
      { season: '1990/1991', name: 'IM Deen Hergott' },
      { season: '1989/1990', name: 'FM Deen Hergott' },
      { season: '1988/1989', name: 'FM Deen Hergott' },
      { season: '1987/1988', name: 'John Armstrong & Glenn Johnstone' },
      { season: '1986/1987', name: 'FM Brian Hartman' },
      { season: '1985/1986', name: 'FM Gordon Taylor' },
      { season: '1984/1985', name: 'FM Brian Hartman' },
      { season: '1983/1984', name: 'Stephen Ball' },
      { season: '1982/1983', name: 'IM Kevin Spraggett' }
      ]
    }
  }
}
</script>