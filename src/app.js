export class TrackMeta{
  track = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';

  get trackMeta(){
    return parse(this.track);
  }

  getTrackMeta(){
    alert( parse(this.track) );
  }
}

function parse(track){
  var spl = track.split(/([\(\[\)\]]|\s-\s|feat\.|ft\.)/);
  var res = {};
  res.mainArtists = spl.shift();
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
      case "ft." : res.featuredArtists = spl[++i].trim(); break;
      case " - " : res.songTitle = spl[++i].trim(); break;
      default : res.songRemix = spl[i].trim();
    }
  }
  return res;
}