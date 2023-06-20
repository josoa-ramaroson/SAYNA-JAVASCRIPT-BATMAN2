function fadeInEnter(entries,observer){
    // non observer : avec un class CSS before-seen
    // observer : sans le clas CSS
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.remove("before-seen");
            }, 1000);
        }
        
    });
}

  // configuration de l'API Observer
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
};

// create a new intersection observer

const observer = new IntersectionObserver(fadeInEnter,options);

// all element to be observed
let selectorElementFadedIn = [
".welcome-banner",
"main article h2",
"main article p",
"main article section",
"article#nemesis  #bat-truc",
"article#nemesis  #bat-droite"
];
let elementFadedIn = document.querySelectorAll(selectorElementFadedIn.join(","));

elementFadedIn.forEach((element)=>{
    element.classList.add("before-seen");
    element.style = "transition: all 0.8s ease-in-out;";
    observer.observe(element);
})