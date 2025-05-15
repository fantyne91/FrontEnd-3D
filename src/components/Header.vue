<template>
    <nav class="nav">
        <div class="logo">
            <router-link to="/">
                <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#277c45;" cx="256" cy="256" r="256"></circle> <path style="fill:#092f16;" d="M269.846,511.624c118.384-6.311,215.404-93.05,237.437-206.564L302.582,100.357l-19.309,23.383 l-33.12-33.121l-2.846,4.408l-2.512-2.51l-21.98,24.292l94.189,94.189l-9.706,9.706l-89.224-89.221l-48.961,60.85l48.961,48.961 H323.25l7.475,7.475l-31.497,14.007l-155.384,17.077l116.714,116.714l-75.667,30.101L269.846,511.624z"></path> <polygon style="fill:#D35933;" points="184.889,426.667 327.111,426.667 355.556,256 156.444,256 "></polygon> <polygon style="fill:#B54324;" points="355.556,256 256,256 256,426.667 327.111,426.667 "></polygon> <path style="fill:#FF7F4F;" d="M359.722,284.444H152.279c-5.554,0-10.057-4.503-10.057-10.056v-36.776 c0-5.554,4.503-10.056,10.057-10.056h207.443c5.554,0,10.056,4.503,10.056,10.056v36.776 C369.778,279.942,365.275,284.444,359.722,284.444z"></path> <path style="fill:#D35933;" d="M359.722,227.556H256v56.889h103.72c5.554,0,10.056-4.503,10.056-10.056v-36.776 C369.778,232.058,365.275,227.556,359.722,227.556z"></path> <path style="fill:#6CAF5F;" d="M227.556,227.721c0,0,0.574-60.625-85.333-56.889C142.222,170.832,159.747,251.568,227.556,227.721z"></path> <path style="fill:#477F3C;" d="M142.222,170.832c0,0,17.525,80.736,85.333,56.889L142.222,170.832z"></path> <path style="fill:#6CAF5F;" d="M284.444,224.64c0,0,56.215,22.704,84.154-58.618C368.599,166.022,287.046,152.809,284.444,224.64z"></path> <path style="fill:#477F3C;" d="M284.444,224.64c0,0,56.215,22.704,84.154-58.618L284.444,224.64z"></path> <path style="fill:#6CAF5F;" d="M261.887,150.607c0,0,38.021,3.87,40.695-50.25C302.582,100.357,250.878,106.679,261.887,150.607z"></path> <path style="fill:#477F3C;" d="M261.887,150.607c0,0,38.021,3.87,40.695-50.25L261.887,150.607z"></path> <path style="fill:#8BC180;" d="M225.714,166.815c0,0,14.317-35.426-36.897-53.038C188.818,113.778,180.472,165.173,225.714,166.815z "></path> <path style="fill:#6CAF5F;" d="M188.818,113.778c0,0-8.345,51.395,36.897,53.038L188.818,113.778z"></path> <g> <circle style="fill:#FFC61B;" cx="237.037" cy="104.296" r="18.963"></circle> <circle style="fill:#FFC61B;" cx="303.407" cy="161.185" r="18.963"></circle> <circle style="fill:#FFC61B;" cx="189.63" cy="161.185" r="18.963"></circle> <circle style="fill:#FFC61B;" cx="246.519" cy="189.63" r="18.963"></circle> </g> <g> <path style="fill:#EAA22F;" d="M237.037,85.333c10.473,0,18.963,8.49,18.963,18.963c0,10.473-8.49,18.963-18.963,18.963V85.333z"></path> <path style="fill:#EAA22F;" d="M303.407,142.222c10.473,0,18.963,8.49,18.963,18.963s-8.49,18.963-18.963,18.963V142.222z"></path> <path style="fill:#EAA22F;" d="M189.63,142.222c10.473,0,18.963,8.49,18.963,18.963s-8.49,18.963-18.963,18.963V142.222z"></path> <path style="fill:#EAA22F;" d="M246.519,170.667c10.473,0,18.963,8.49,18.963,18.963s-8.49,18.963-18.963,18.963V170.667z"></path> </g> </g></svg>
            </router-link>
            
        </div>
        <div class="links">
            <router-link to="/"> Inicio</router-link>
            <router-link to="/Huerto"> Plantas para huerto</router-link>
            <router-link to="/Medicinal"> Plantas medicinales</router-link>
            <router-link to="/Antiplagas"> Plantas antiplagas</router-link>
        </div>
        <div @click="toggle" class="mobileMenu">
            <svg class="menu" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        
    </nav>
</template>

<script setup>
import { ref } from 'vue';



// window.addEventListener('resize', () => {
//     const width = window.innerWidth;
//     const nav = document.querySelector('.nav');
//     if (width < 768) {
//         nav.classList.add('mobile');   
//         isMobile.value = true;  
//     } 
// });

const toggle = () => {
    const links = document.querySelector('.links');
  
    links.classList.toggle('show'); 
    links.addEventListener("click", () => links.classList.remove('show') )      

}

</script>

<style scoped>
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        width: 100%;       
        padding: 16px 48px;
        
    }
    nav *{       
        color: #204722;
        font-size: 1em;       
    }
    svg {
        width: 40px;
        height: 40px;
    }
    .logo {
        justify-items: start;
        text-align: left;
        display:none;
          z-index:3;
    }
    .links {
       flex-direction: row;
        justify-content: space-evenly;
        display: flex;
        width: 100%; 
    }
    .mobileMenu{
        display: none;
          z-index:3;
    }
   @media (max-width: 768px) {
        .logo {
            display: flex;
            justify-content: start;
            
          
        }
        .mobileMenu{
            display: block;
          
        }
        .links {
           display:none;
            position: absolute;
            top:0px;
            left:0;
               width: 100%;
               padding: 16px 0;
              
               border-bottom:4px solid #2a6a15;
               
        }
        .links.show{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            background-color: white;
            top:55px
             
        }
    }
    
   
</style>