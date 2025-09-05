function switch_tag(tag_id,underline_id,block_id){
    let all_block = document.querySelectorAll(".square");
    for(let i=0; i<all_block.length; i++){
    all_block[i].style.display = "none";
    };
    let click_block = document.querySelector("#"+block_id);
    click_block.style.display = "block";

    let all_tag = document.querySelectorAll(".tag_button");
    for(let i=0; i<all_tag.length; i++){
        all_tag[i].classList.remove("active");
    }
    let click_tag = document.querySelector("#"+tag_id);
    click_tag.classList.add("active")

    let all_underline = document.querySelectorAll(".tag_underline");
    for(let i=0; i<all_underline.length; i++){
        all_underline[i].classList.remove("active");
    }
    let click_underline = document.querySelector("#"+underline_id);
    click_underline.classList.add("active");
}


const cursorTraceRegionContainer = document.querySelector("#cursor_trace_region_container");
const cursorTraceRegion = document.querySelector(".cursor_trace_region");
const theCursor = document.querySelector("#cursor_trace_thecursor");

function handleMouseMove(e) {
    let rect = cursorTraceRegionContainer.getBoundingClientRect();
    let x = e.clientX - rect.left-25;
    let y = e.clientY - rect.top-25;
    theCursor.style.left = x + "px";
    theCursor.style.top = y + "px";
    // theCursor.style.display = "block";
    // if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
    //     cursorTrace.dispatchEvent(new Event('mouseleave'));
    //     return;
    // }
}

cursorTraceRegion.addEventListener("mouseenter", function() {
    cursorTraceRegion.addEventListener("mousemove", handleMouseMove);
});

cursorTraceRegion.addEventListener("mouseleave", function() {
    cursorTraceRegion.removeEventListener("mousemove", handleMouseMove);
    // theCursor.style.display = "none";
});


function mobileHittingIllustrate(){
    const mobileHammerIllustrate = document.querySelector("#mobile_hammer_illustrate");
    mobileHammerIllustrate.style.display = "block";    
    mobileHammerIllustrate.classList.add("mobileHammerHittingIllustrate");
    document.querySelector("#mobile_hitting_gopher_illustrate").src="dizzygoodgopher.png";
    document.querySelector(".mobileHammerHittingIllustrate").addEventListener("animationend",()=>{
        setTimeout(()=>{
            mobileHammerIllustrate.style.display = "none"; 
            document.querySelector("#mobile_hitting_gopher_illustrate").src="goodgopher.png"
        },300);                               
    },{once:true});

    

}
