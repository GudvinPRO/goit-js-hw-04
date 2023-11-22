const profile = {
  username: "Jacob",
  playTime: 300,

<<<<<<< Updated upstream
  changeUsername(newUsername) {
    this.username = newUsername;
  },

  updatePlayTime(newTime) {
    this.playTime += newTime; 
  },
  
  getInfo() {
=======
  changeUsername(nemUsername) {

    if(profile.username != nemUsername){
      profile.username = nemUsername;
      return profile.username;
    }
    
  }

  getInfo() {   
>>>>>>> Stashed changes
    return `${profile.username} has ${profile.playTime} active hours!`;
  }

};







console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"