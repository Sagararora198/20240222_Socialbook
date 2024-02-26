import { Component } from "@angular/core";

@Component({
    selector:'right-main',
    standalone:true,
    templateUrl:'./rightmain.component.html',
    styleUrl:'./rightmain.component.css'

})
export class RightMain{
    Events:Array<{
        event_date:number,
        event_month:string,
        event_heading:string,
        event_location:string,


    }> = [
        {
            event_date:18,
            event_month:"March",
            event_heading:"Social Media",
            event_location:"Willson Tech Park",
        },
        {
            event_date:22,
            event_month:"June",
            event_heading:"Mobile Marketing",
            event_location:"Willson Tech Park",
        },



        

    ]
    Conversations:Array<{
        friend_pfp:string,
        friend_name:string
    }> = [
        {
            friend_pfp:"https://i.postimg.cc/XNPtfdVs/member-1.png",
            friend_name:"Alison Mina"
        },
        {
            friend_pfp:"https://i.postimg.cc/4NhqByys/member-2.png",
            friend_name:"Jackson Aston"
        },
        {
            friend_pfp:"https://i.postimg.cc/FH5qqvkc/member-3.png",
            friend_name:"Samona Rosea"
        },
        {
            friend_pfp:"https://i.postimg.cc/Sx65bPcP/member-4.png",
            friend_name:"Mike Pérez"
        },


    ]
}