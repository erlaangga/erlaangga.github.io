"use strict";
document.onreadystatechange = function(e1){
			var togg_menu = document.getElementById("toggler-menu");
			togg_menu.onclick = function(e){
				if (!menu.classList.contains("active")) {
					menu.classList.add("active");
					menu.style.paddingBottom = '5px';
				}else{
					menu.classList.remove("active");
				}
			}
		}