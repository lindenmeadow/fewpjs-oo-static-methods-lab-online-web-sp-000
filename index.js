class Formatter {
  //add static methods here
  static capitalize(str){
    return str.replace(/\b[a-zA-Z]/gi, x => x.toUpperCase() )

  }

  static sanitize(str){
    return str.replace(/[^a-z\s\'\"\-]/gi,"")
  }

  static titleize(string){
    const exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let newstring = string.charAt(0).toUpperCase() + string.slice(1);
    return newstring.replace(/\b(\w*)/gim, function(x){
      return (exceptionalWords.includes(x)) ? x : (x.charAt(0).toUpperCase() + x.slice(1))
    });
  }
}
