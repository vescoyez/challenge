export class TrackMeta{
  track = `Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)`;

  get trackMeta(){
    return parseTrack(this.track);
  }

  getTrackMeta(){
    alert( parseTrack(this.track) );
  }
}

function parseTrack(track){
  var spl = track.split(/([\(\[\)\]]|\s-\s|feat\.|ft\.)/);
  var res = {
    mainArtists: new Array(),
    featuredArtists: new Array(),
    songRemix: new Array()
  };
  res.mainArtists = res.mainArtists.concat( spl.shift().trim().split(` & `) );
  for(var i = 0; i < spl.length; ++i)
  {
    switch(spl[i].toLowerCase()){
      case "" :
      case " " :
      case "(" :
      case ")" :
      case "[" :
      case "]" : break;
      case "feat." :
      case "ft." : res.featuredArtists = res.featuredArtists.concat( spl[++i].trim().split(` & `) ); break;
      case " - " : res.songTitle = spl[++i].trim(); break;
      default : res.songRemix = res.songRemix.concat( spl[i].trim() );
    }
  }
  return res;
}

