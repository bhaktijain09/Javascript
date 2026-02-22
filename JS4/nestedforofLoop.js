let heros = [["spiderman", "batman", "wonder woman"], ["super man", "flash", "thor"]];
for (list of heros){
    console.log(list); 
    //heros[0] = listA = ["spiderman", "batman", "wonder woman"]
    //heros[1] = listB =  ["super man", "flash", "thor"]
    for(hero of list){
    console.log(hero);
    //listA[0] = ["spiderman"]
    //listA[1] = ["batman"]
    //listA[2] = ["wonder woman"]

    //listB[0] = ["super man"]
    //listB[1] = ["flash"]
    //listB[2] = ["thor"]
    
    }
}

// code becomes - 
// let heros = [["spiderman", "batman", "wonder woman"], ["super man", "flash", "thor"]];
// for (list of heros){
//       console.log(list); 
//            for(hero of list){
//                 console.log(hero);
//     }
// }

// heros = [list[hero], list[hero], list[hero]]