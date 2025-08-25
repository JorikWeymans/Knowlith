import IconType from "@/types/IconType";


interface IconProps {
    size?: number
    colorClassName? : string;
    iconType: IconType;
}


const Icon = ({iconType, size = 24, colorClassName ="default"} : IconProps) => {

    if(colorClassName === "default") {colorClassName = ""}

    switch (iconType) {
        case IconType.Home:
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path className={colorClassName!}  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className={colorClassName!}  d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>)
        case IconType.Courses_1:
            return (
                <svg fill="currentColor"  width={size} height={size} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 31.17 31.17"
                >
                    <g><g>
                        <path className={colorClassName!}
                              d="M7.279,15.649v7.466c0,0,2.706-0.939,5.351-0.027s7.112,3.602,7.112,3.602s1.367-2.223,2.964-3.25
                        c1.596-1.027,2.826-1.814,2.826-1.814v-5.772l-4.925,4.349L7.279,15.649z"/>
                        <polygon className={colorClassName!}
                            points="3.573,13.681 20.438,19.088 31.17,9.507 13.718,4.48 0,12.536 2.176,13.232 2.176,19.356 1.209,19.356
                        1.209,23.438 4.593,23.438 4.593,19.356 3.573,19.356 		"/>
                    </g></g>
                </svg>
            )
        case IconType.Courses_2:
            return (
                <svg fill="currentColor" width={size} height={size} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>books</title>
                    <path className={colorClassName!} d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z"></path>
                </svg>
            )
        case IconType.Settings:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-settings">
                    <circle className={colorClassName!} cx="12" cy="12" r="3"></circle>
                    <path
                        className={colorClassName!}
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        case IconType.LogOut:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-log-out"
                     transform="scale(-1 1)">
                    <path className={colorClassName!} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline className={colorClassName!} points="16 17 21 12 16 7"></polyline>
                    <line className={colorClassName!} x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
            )
        case IconType.Member:
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill={colorClassName === "" ? "#FFD66B" : "currentColor"}
                          className={colorClassName!} fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.8382 11.1263L21.609 13.5616C21.2313 17.5742 21.0425 19.5805 19.8599 20.7902C18.6773 22 16.9048 22 13.3599 22H10.6401C7.09517 22 5.32271 22 4.14009 20.7902C2.95748 19.5805 2.76865 17.5742 2.391 13.5616L2.16181 11.1263C1.9818 9.2137 1.8918 8.25739 2.21899 7.86207C2.39598 7.64823 2.63666 7.5172 2.89399 7.4946C3.36968 7.45282 3.96708 8.1329 5.16187 9.49307C5.77977 10.1965 6.08872 10.5482 6.43337 10.6027C6.62434 10.6328 6.81892 10.6018 6.99526 10.5131C7.31351 10.3529 7.5257 9.91812 7.95007 9.04852L10.1869 4.46486C10.9888 2.82162 11.3898 2 12 2C12.6102 2 13.0112 2.82162 13.8131 4.46485L16.0499 9.04851C16.4743 9.91812 16.6865 10.3529 17.0047 10.5131C17.1811 10.6018 17.3757 10.6328 17.5666 10.6027C17.9113 10.5482 18.2202 10.1965 18.8381 9.49307C20.0329 8.1329 20.6303 7.45282 21.106 7.4946C21.3633 7.5172 21.604 7.64823 21.781 7.86207C22.1082 8.25739 22.0182 9.2137 21.8382 11.1263ZM8.25 18C8.25 17.5858 8.58579 17.25 9 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18Z" />
                </svg>
            )
        case IconType.Streak:
            return (
                <svg width={size} height={size}  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill={colorClassName === "" ? "#FFD66B" : "currentColor"}
                          className={colorClassName!}
                          d="M9.5 10.0003C9.5 9.20875 8.44722 8.99895 8.16791 9.73957C7.49228 11.5311 7 13.1337 7 14.0002C7 16.7616 9.23858 19.0002 12 19.0002C14.7614 19.0002 17 16.7616 17 14.0002C17 13.0693 16.4318 11.2887 15.6784 9.33698C14.7026 6.80879 14.2146 5.54469 13.6123 5.4766C13.4196 5.45482 13.2093 5.49399 13.0374 5.58371C12.5 5.86413 12.5 7.24285 12.5 10.0003C12.5 10.8287 11.8284 11.5003 11 11.5003C10.1716 11.5003 9.5 10.8287 9.5 10.0003Z" />
                </svg>
            )
        case IconType.Time:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-clock">
                    <circle className={colorClassName!} cx="12" cy="12" r="10"></circle>
                    <polyline className={colorClassName!} points="12 6 12 12 16 14"></polyline>
                </svg>
            )
        case IconType.Lesson:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-book-open">
                    <path className={colorClassName!} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path className={colorClassName!} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            )
        case IconType.Profile:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-user">
                    <path className={colorClassName!} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle className={colorClassName!} cx="12" cy="7" r="4"></circle>
                </svg>
            )
        case IconType.Notification:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}  viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-bell">
                    <path className={colorClassName!} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path className={colorClassName!} d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            )
        case IconType.Arrow:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-arrow-right">
                    <line className={colorClassName!} x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline className={colorClassName!} points="12 5 19 12 12 19"></polyline>
                </svg>
            )
        case IconType.Star:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-star">
                    <polygon className={colorClassName!}
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        case IconType.Calendar:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-calendar">
                <rect className={colorClassName!} x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line className={colorClassName!} x1="16" y1="2" x2="16" y2="6"></line>
                    <line className={colorClassName!} x1="8" y1="2" x2="8" y2="6"></line>
                    <line className={colorClassName!} x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            )
        case IconType.Search:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-search">
                    <circle className={colorClassName!} cx="11" cy="11" r="8"></circle>
                    <line className={colorClassName!} x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            )
    }

};

export default Icon;