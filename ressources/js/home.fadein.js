function fadeInEnter(entries,observer){
    // non observer : avec un class CSS before-seen
    // observer : sans le clas CSS
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            // setTimeout(() => {
            //     entry.target.classList.remove("before-seen");
            // }, 100);
            entry.target.classList.remove("before-seen");
        }
        
    });
}

  // configuration de l'API Observer
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

// create a new intersection observer

const observer = new IntersectionObserver(fadeInEnter,options);

// all element to be observed
let selectorElementFadedIn = [
".welcome-banner",
"main article",
"main article p",
"main article section",
"#bat-truc",
"#bat-droite",
"#fleche-down",
"article#nemesis  #bat-truc",
"article#nemesis  #bat-droite",
"footer"

];
let elementFadedIn = document.querySelectorAll(selectorElementFadedIn.join(","));

elementFadedIn.forEach((element)=>{
    element.classList.add("before-seen");
   // element.style = "transition: all 2s ease-in-out;";
    observer.observe(element);
})