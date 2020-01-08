class Banner{
	constructor(){
	    
			this.img=document.querySelectorAll(".imgbox a")
			this.simg=document.querySelectorAll(".simg a")
			this.index=0;
			this.i=1
			this.t;
			this.move();
			this.event();
			
	}
		
		move(){
			var that=this
			clearInterval(this.t)
			this.t=setInterval(function(){
				if(that.index==that.img.length-1){
					that.index=0
				}else{
					that.index++;
				}
				if(that.index==0){
					that.iPrev=that.img.length-1
				}else{
					that.iPrev=that.index-1
				}
				that.abc(1)
				
			},4000)
		}
		
		event(){
			var that=this;
			for(let i=0;i<this.simg.length;i++){
				this.simg[i].onmouseenter=function(){
					// console.log(i)
					// console.log(that.index)
					that.index=i;
					if(that.index==that.simg.length-1){
						that.iPrev=0;
					}else{
						
					that.iPrev=i+1;
					}
					that.abc()
				}
				
			}
		}

		abc(d){
			
			this.img[this.index].style.zIndex=this.i++;
			this.img[this.index].style.left = -1000 * d+"px";
			
			move(this.img[this.index],{left:0});
			
			move(this.img[this.iPrev],{left:1000 * d});
			
		}
		}
		new Banner()