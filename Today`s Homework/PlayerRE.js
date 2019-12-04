var Player={
            list: [],
            name: "player",
            currentItem: 0,
            played: false,
            next: async function(){
                if(this.played){
                    this.currentItem++;
                } else {
                    this.currentItem=0;
                }
            },
            prev: async function(){
                if(this.played && this.currentItem > 0){
                    this.currentItem--;
                } else {
                    this.currentItem = this.list.length - 1;
                }
            },
            getCurrent: async function(){
                return this.list[this.currentItem];
            },
            play: async function(){
                this.played = true;
                console.log(this.getCurrent());
            },
            addToList: async function(listItem){
                this.list.push(listItem);
            }
        };
        

        var VideoPlayer = Object.create(Player);
        VideoPlayer.list = [];
        VideoPlayer.uploadToYoutube = function(name){
            for(var i=0; i<this.list.length; i++){
                if(this.list[i].name===name){
                    console.log("upload to youtube", this.list[i]);
                    return
                }
            }
            console.log("can not find file "+ name + "to upload to youtube");
        };
        VideoPlayer.playFromYoutube=function(item){
            console.log("Playing video from youtube:", item);
            // this.addToList(item);
        };
        VideoPlayer.addToList({name: "Shashmaqom", year: 2000, duration: "3,2m",authot: "Tajik National"});
        VideoPlayer.uploadToYoutube("Shashmaqom");
        console.log("Player list:", Player.list);