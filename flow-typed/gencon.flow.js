declare type GenConEvent = {
    "Game ID": string,
    Group: string,
    Title: string,
    "Short Description": string,
    "Long Description": string,
    "Event Type": string,
    "Game System": string,
    "Rules Edition": string,
    "Minimum Players": string,
    "Maximum Players": string,
    "Age Required": string,
    "Experience Required": string,
    "Materials Provided": string,
    "Start Date & Time": string | Date,
    Duration: string,
    "End Date & Time": string,
    "GM Names": string,
    Website: string,
    Email: string,
    "Tournament?": string,
    "Round Number": string,
    "Total Rounds": string,
    "Minimum Play Time": string,
    "Attendee Registration?": string,
    "Cost $": string,
    Location: string,
    "Room Name": string,
    "Table Number": string,
    "Special Category": string,
    "Tickets Available": string,
    "Last Modified": string
};

declare type Color = {
    tag: string,
    color: string
};

declare type DaysEvents = {
    day: string,
    events: Array<GenConEvent>
};

declare type NaviDay = {
    value: string,
    formatted: string
};
