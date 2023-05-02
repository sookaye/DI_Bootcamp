    class Video {
    constructor (title,uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
  }
  const video1 = new Video("Funny Cats Compilation", "John Doe", 3600);
  video1.watch(); 
  
  const video2 = new Video("How to Bake a Cake", "John Doe", 1800);
  video2.watch(); 
  
  const videos = [
    ["Best of me", "Jaisan", 2400],
    ["War", "Previn", 7200],
    ["Cooking with Damien", "Jean Luc", 3600],
    ["Travel with Jaisan", "Damien", 6000],
    ["Working techniques", "Yvan", 3000]
  ];
  
  for (let i = 0; i < videos.length; i++) {
    const video = new Video(videos[i][0], videos[i][1], videos[i][2]);
    video.watch();
  }