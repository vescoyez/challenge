export class TrackMeta{
  track = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';

  get mainArtists(){
    return this.track;
  }

  trackMeta(){
    alert(this.mainArtists);
  }
}