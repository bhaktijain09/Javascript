// setInterval(Function, timeout);
// setInterval performs action given in function after every timeout given until stopped.

// setInterval(() => {
//     console.log("Bhakti Jain");
// }, 4000);

// setInterval(() => {
//     console.log("Jain");
// }, 3000);

// inorder to stop the action being performed continuously
// we store setInterval in a variable and to stop the action of that setInterval, we use clearInterval(variable_name)

const id1 = setInterval(() => {
    console.log("TE");
}, 2000);

const id2 = setInterval(() => {
    console.log("COMPS");
}, 1000);

// now this will continuously getting printed 
// to stop id1 i'll run - 
clearInterval(id1); // now TE (id1) will stop printing // only Bhakti, Jain, COMPS(id2) are getting printed according to their resp. timeout
clearInterval(id2); // now COMPS (id2) will stop printing // only Bhakti, Jain are getting printed according to their resp. timeout
// now to stop Bhakti, Jain being printed, you need to store them as well in variable and clearInterval(variable_name), else it will print infinitely 