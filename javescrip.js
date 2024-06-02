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
