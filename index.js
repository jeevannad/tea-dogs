class TeaDogs {
    constructor(teaType, dogNames = []) {
      this.teaType = teaType;
      this.isBrewed = false;
      this.dogNames = dogNames;
    }
  
    brew() {
      console.log(`Brewing a delightful cup of ${this.teaType} tea.`);
      setTimeout(() => {
        this.isBrewed = true;
      }, 4000); // Simulate a 4-second brewing time
    }
  
    addDog(dogName) {
      this.dogNames.push(dogName);
      console.log(`Welcoming ${dogName} to the tea party!`);
    }
  
    enjoy() {
      if (this.isBrewed) {
        const dogNamesString = this.dogNames.length > 0 ? ` with ${this.dogNames.join(', ')}` : '';
        console.log(`Sipping on the calming flavor of ${this.teaType} tea${dogNamesString}. Woof-derful!`);
      } else {
        console.log('Your tea is not brewed yet. Please wait for the brewing process to complete.');
      }
    }
  }
  
  // Example usage:
  const teaParty = new TeaDogs('Earl Grey', ['Buddy', 'Daisy']);
  teaParty.brew();
  setTimeout(() => {
    teaParty.addDog('Charlie');
    teaParty.enjoy();
  }, 5000); // Enjoy after 5 seconds
  