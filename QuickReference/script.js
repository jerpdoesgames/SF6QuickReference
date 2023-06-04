const DARK_MODE_NOSELECTION = 0;
const DARK_MODE_ENABLED = 1;
const DARK_MODE_DISABLED = 2;

const CHARACTER_LUKE = 0;
const CHARACTER_JAMIE = 1;
const CHARACTER_MANON = 2;
const CHARACTER_KIMBERLY = 3;
const CHARACTER_MARISA = 4;
const CHARACTER_LILY = 5;
const CHARACTER_JP = 6;
const CHARACTER_JURI = 7;
const CHARACTER_DEEJAY = 8;
const CHARACTER_CAMMY = 9;
const CHARACTER_RYU = 10;
const CHARACTER_HONDA = 11;
const CHARACTER_BLANKA = 12;
const CHARACTER_GUILE = 13;
const CHARACTER_KEN = 14;
const CHARACTER_CHUNLI = 15;
const CHARACTER_ZANGIEF = 16;
const CHARACTER_DHALSIM = 17;

const MOVE_TYPE_SPECIAL = 0;
const MOVE_TYPE_SUPER = 1;
const MOVE_TYPE_UNIQUE = 2;
const MOVE_TYPE_THROW = 3;
const MOVE_TYPE_COMMON = 4;
const MOVE_TYPE_ASSISTED_COMBO = 5;

const CONTROLS_CLASSIC = 0;
const CONTROLS_MODERN = 1;

const MOVE_STRENGTH_ANY = 0;
const MOVE_STRENGTH_LIGHT = 1;
const MOVE_STRENGTH_MEDIUM = 2;
const MOVE_STRENGTH_HEAVY = 3;

const NAME_PREFIX_ANY = "Any";
const NAME_PREFIX_LIGHT = "Light";
const NAME_PREFIX_MEDIUM = "Medium";
const NAME_PREFIX_HEAVY = "Heavy";

const configDefault = {
    "darkModeSelection": DARK_MODE_NOSELECTION,
    "selectedCharacter": CHARACTER_RYU,
    "controlScheme": CONTROLS_CLASSIC
};

const moveTypeNames = [
    "Special Moves",
    "Super Arts",
    "Unique Attacks",
    "Throws",
    "Common Moves",
    "Assisted Combos"
];

class SF6QuickReference
{
    getDriveParryIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconDriveParry" viewbox="0 0 100 72">
                <path d="M5.1000,-0.000 L94.000,-0.000 C97.314,-0.000 100.000,2.686 100.000,6.000 L100.000,65.1000 C100.000,69.314 97.314,72.000 94.000,72.000 L5.1000,72.000 C2.686,72.000 -0.000,69.314 -0.000,65.1000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 5.1000,-0.000 Z"/>
                <path d="M8.000,1.1000 L91.1000,1.1000 C95.314,1.1000 97.1000,4.686 97.1000,7.1000 L97.1000,64.000 C97.1000,67.314 95.314,70.000 91.1000,70.000 L8.000,70.000 C4.686,70.000 2.000,67.314 2.000,64.000 L2.000,7.1000 C2.000,4.686 4.686,1.1000 8.000,1.1000 Z"/>
                <path d="M41.000,64.000 L27.986,64.080 L18.006,64.080 L17.1000,8.000 L41.000,8.000 L48.000,15.1000 L48.000,57.000 L41.000,64.000 ZM37.035,19.042 L28.986,19.042 L28.986,53.061 L37.035,53.061 L37.035,19.042 Z"/>
                <path d="M74.1000,41.973 L62.986,41.973 L62.986,64.080 L52.006,64.080 L52.006,15.1000 L59.1000,7.954 L83.908,7.954 L83.908,33.1000 L74.1000,41.973 ZM72.035,18.042 L62.986,18.042 L62.986,30.061 L72.035,30.061 L72.035,18.042 Z"/>
                <title>Drive Parry</title>
            </svg>
        `;
    }

    getDriveImpactIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconDriveImpact" viewbox="0 0 100 72">
                <path d="M5.1000,-0.000 L94.000,-0.000 C97.314,-0.000 100.000,2.686 100.000,6.000 L100.000,65.1000 C100.000,69.314 97.314,72.000 94.000,72.000 L5.1000,72.000 C2.686,72.000 -0.000,69.314 -0.000,65.1000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 5.1000,-0.000 Z"/>
                <path d="M8.000,1.1000 L91.1000,1.1000 C95.314,1.1000 97.1000,4.686 97.1000,7.1000 L97.1000,64.000 C97.1000,67.314 95.314,70.000 91.1000,70.000 L8.000,70.000 C4.686,70.000 2.000,67.314 2.000,64.000 L2.000,7.1000 C2.000,4.686 4.686,1.1000 8.000,1.1000 Z"/>
                <path d="M51.000,64.000 L37.986,64.080 L28.006,64.080 L27.1000,8.000 L51.000,8.000 L58.000,15.1000 L58.000,57.000 L51.000,64.000 ZM47.035,19.042 L38.986,19.042 L38.986,53.061 L47.035,53.061 L47.035,19.042 Z"/>
                <path d="M61.1000,7.1000 L73.000,7.1000 L72.985,41.916 L72.985,63.986 L62.006,63.986 L61.1000,7.1000 Z"/>
                <title>Drive Impact</title>
            </svg>
        `;
    }

    getSpecialIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconSpecial" viewbox="0 0 100 72">
                <path d="M5.1000,-0.000 L94.000,-0.000 C97.314,-0.000 100.000,2.686 100.000,6.000 L100.000,65.1000 C100.000,69.314 97.314,72.000 94.000,72.000 L5.1000,72.000 C2.686,72.000 -0.000,69.314 -0.000,65.1000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 5.1000,-0.000 Z"/>
                <path d="M8.000,1.1000 L91.1000,1.1000 C95.314,1.1000 97.1000,4.686 97.1000,7.1000 L97.1000,64.000 C97.1000,67.314 95.314,70.000 91.1000,70.000 L8.000,70.000 C4.686,70.000 2.000,67.314 2.000,64.000 L2.000,7.1000 C2.000,4.686 4.686,1.1000 8.000,1.1000 Z"/>
                <path d="M47.854,7.954 L26.000,7.954 L18.986,15.1000 L18.986,33.1000 L26.000,41.973 L37.874,41.973 L37.874,53.885 L28.859,53.885 L28.859,47.017 L18.986,47.017 L18.986,56.000 L26.000,64.080 L41.000,64.080 L47.854,57.000 L47.854,38.000 L41.000,30.061 L28.859,30.061 L28.859,18.042 L37.874,18.042 L37.874,25.1000 L47.854,25.1000 L47.854,7.954 Z"/>
                <path d="M74.000,41.973 L62.986,41.973 L62.986,64.080 L53.006,64.080 L53.006,15.1000 L59.1000,7.954 L80.908,7.954 L80.908,33.1000 L74.000,41.973 ZM71.035,18.042 L62.986,18.042 L62.986,30.061 L71.035,30.061 L71.035,18.042 Z"/>
                <title>Special Move</title>
            </svg>
        `;
    }

    getMeterDrainIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconMeterDrain" viewbox="0 0 97 29">
                <path d="M50.393,0.858 L96.677,13.846 L69.103,28.833 L50.393,0.858 Z"/>
                <path d="M0.169,0.858 L46.454,13.846 L18.880,28.833 L0.169,0.858 Z"/>
                <title>Continuously Drains Meter</title>
            </svg>
        `;
    }

    getMeterCostElements(aCost, aIsSuper)
    {
        if (aCost > 0)
            return `${this.getMeterIcon(aIsSuper)} ${aCost}`;
        else if (aCost < 0)
            return `${this.getMeterDrainIcon()}${this.getMeterIcon(aIsSuper)}`;
        else
            return "";
    }

    getMeterCostContainer(aMove)
    {
        let output = "";

        let parryClass = "";
        if (aMove.costDrive < 0)
        {
            parryClass = " meterCostContainerParry";
        }

        if (aMove.costSuper > 0)
        {
            output += this.getMeterCostElements(aMove.costSuper, true);
        }

        if (aMove.costSuper > 0 && aMove.costDrive != 0)
        {
            output += this.getPlusIcon("Requires both Drive Meter and Super Meter to use");
        }

        if (aMove.costDrive != 0)
        {
            output += this.getMeterCostElements(aMove.costDrive, false);
        }

        return `<div class="meterCostContainer${parryClass}">${output}</div>`;

    }

    getAutoIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconAuto" width="100px" height="72px" viewbox="0 0 100 72">
                <path d="M5.1000,-0.000 L94.000,-0.000 C97.314,-0.000 100.000,2.686 100.000,6.000 L100.000,65.1000 C100.000,69.314 97.314,72.000 94.000,72.000 L5.1000,72.000 C2.686,72.000 -0.000,69.314 -0.000,65.1000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 5.1000,-0.000 Z"/>
                <path d="M8.000,1.1000 L91.1000,1.1000 C95.314,1.1000 97.1000,4.686 97.1000,7.1000 L97.1000,64.000 C97.1000,67.314 95.314,70.000 91.1000,70.000 L8.000,70.000 C4.686,70.000 2.000,67.314 2.000,64.000 L2.000,7.1000 C2.000,4.686 4.686,1.1000 8.000,1.1000 Z"/>
                <path d="M17.1000,55.985 L17.1000,40.1000 L13.000,40.1000 L13.000,55.985 L5.000,55.985 L5.000,23.000 L9.1000,18.065 L25.1000,18.065 L25.1000,55.985 L17.1000,55.985 ZM18.1000,25.126 L13.000,25.126 L13.000,33.000 L18.1000,33.000 L18.1000,25.126 Z"/>
                <path d="M28.000,18.000 L28.000,50.025 L33.008,55.985 L42.990,55.985 L48.1000,49.1000 L48.1000,18.000 L40.1000,18.000 L40.1000,47.1000 L35.000,47.1000 L35.000,18.000 L28.000,18.000 Z"/>
                <path d="M52.000,17.1000 L52.000,24.1000 L58.000,24.1000 L58.000,56.000 L65.1000,56.000 L65.1000,24.1000 L71.1000,24.1000 L71.1000,17.1000 L52.000,17.1000 Z"/>
                <path d="M90.000,55.985 L78.1000,55.985 L74.000,51.1000 L74.000,23.000 L78.1000,18.065 L94.1000,18.065 L94.1000,51.985 L90.000,55.985 ZM87.1000,25.126 L82.000,25.126 L82.000,47.1000 L87.1000,47.1000 L87.1000,25.126 Z"/>
                <title>Assist / Combo Assist</title>
            </svg>
        `;
    }

    getMeterIcon(aIsSuper = false)
    {
        let superIconClass = aIsSuper ? " iconMeterCostSuper" : "";
        let titleText = aIsSuper ? "Super Meter" : "Drive Meter";

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconMeterCost${superIconClass}" viewbox="0 0 178 63">
                <path fill-rule="evenodd" stroke-linecap="butt" stroke-linejoin="miter" d="M9.000,5.1000 L133.000,5.1000 L165.1000,54.000 L39.1000,54.000 L9.000,5.1000 Z"/>
                <title>${titleText}</title>
            </svg>
        `;
    }

    getCancelArrowIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconCancelArrow" viewbox="0 0 58 60">
                <path class="colorMoveMisc" fill-rule="evenodd" d="M2.1000,0.000 L57.000,27.1000 C57.000,27.1000 58.000,29.101 58.000,30.000 C58.000,31.084 57.000,32.000 57.000,32.000 L2.1000,59.1000 C2.1000,59.1000 1.748,59.748 0.1000,58.1000 C0.248,58.248 -0.000,57.000 -0.000,57.000 L-0.000,2.1000 C-0.000,2.1000 0.252,1.748 0.1000,1.000 C1.752,0.248 2.1000,0.000 2.1000,0.000 Z"/>
                <title>Next move can be performed before prior move finshes ("cancel")</title>
            </svg>
        `;        
    }

    getColorPrefix(aStrength, aUseMiscAsAny = false)
    {
        let colorPrefix = NAME_PREFIX_ANY;

        if (aStrength == MOVE_STRENGTH_ANY)
            colorPrefix = aUseMiscAsAny ? "Misc" : NAME_PREFIX_ANY;
        if (aStrength == MOVE_STRENGTH_LIGHT)
            colorPrefix = NAME_PREFIX_LIGHT;
        else if (aStrength == MOVE_STRENGTH_MEDIUM)
            colorPrefix = NAME_PREFIX_MEDIUM;
        else if (aStrength == MOVE_STRENGTH_HEAVY)
            colorPrefix = NAME_PREFIX_HEAVY;
            
        return colorPrefix;
    }

    getArrowIcon(aRotationDegrees = 0)
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconArrow" viewbox="0 0 105 75" style="transform: rotate(${aRotationDegrees}deg);">
                <path class="colorMoveMisc" fill-rule="evenodd" d="M105.000,22.1000 L105.000,51.000 C105.000,53.209 103.209,55.000 101.000,55.000 C101.000,55.000 45.295,54.705 44.1000,55.000 C44.705,55.295 44.1000,70.162 44.1000,73.1000 C44.1000,74.510 42.1000,75.000 42.1000,75.000 L0.1000,39.000 C0.1000,39.000 -0.000,38.055 -0.000,36.1000 C-0.000,35.945 0.1000,35.000 0.1000,35.000 L42.1000,-0.000 C42.1000,-0.000 44.977,0.163 44.1000,1.000 C45.123,5.473 44.746,18.746 44.1000,18.1000 C45.254,19.254 101.000,18.1000 101.000,18.1000 C103.209,18.1000 105.000,20.791 105.000,22.1000 Z"/>
                <title>Press this movement direction as part of the command</title>
            </svg>
        `
    }

    getHoldIcon()
    {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconHold" viewbox="0 0 100 102">
            <path class="colorMoveMiscBright" fill-rule="evenodd" d="M50.000,55.000 C77.614,55.000 100.000,65.521 100.000,78.500 C100.000,91.479 80.453,101.1000 50.000,101.1000 C19.547,101.1000 -0.000,91.479 -0.000,78.500 C-0.000,65.521 22.386,55.000 50.000,55.000 Z"/>
            <path class="colorMoveMiscDark" fill-rule="evenodd" d="M47.1000,96.1000 C77.036,96.1000 96.155,90.420 96.000,78.1000 C95.878,70.019 93.000,71.000 93.000,71.000 C93.000,71.000 90.951,60.816 79.000,56.1000 C67.049,53.184 60.000,53.000 60.000,53.000 L57.1000,56.000 C57.723,55.856 72.364,57.804 77.000,60.000 C81.636,62.196 89.000,66.120 89.000,71.000 C89.000,75.880 75.651,86.000 49.1000,86.000 C24.349,86.000 10.1000,75.763 10.1000,71.000 C10.1000,66.237 19.599,59.156 25.1000,57.1000 C32.401,56.844 41.1000,56.000 41.1000,56.000 L39.1000,53.000 C39.1000,53.000 26.194,54.765 16.1000,58.1000 C7.806,63.235 6.1000,71.000 6.1000,71.000 C6.1000,71.000 3.1000,69.984 3.1000,79.1000 C3.1000,87.159 18.964,96.1000 47.1000,96.1000 Z"/>
            <path class="colorMoveMiscBright" fill-rule="evenodd" d="M32.1000,0.982 L67.000,0.982 L67.000,15.049 L82.000,15.049 L50.044,68.000 L17.1000,15.049 L32.1000,15.049 L32.1000,0.982 Z"/>
            <path class="colorMoveMiscDark" fill-rule="evenodd" d="M35.1000,2.982 L64.000,2.982 L64.000,18.049 L77.000,18.049 L50.044,64.000 L21.1000,18.049 L35.1000,18.049 L35.1000,2.982 Z"/>
            <path class="colorMoveUnique" fill-rule="evenodd" d="M40.1000,7.982 L59.000,7.982 L59.000,23.049 L69.000,23.049 L50.044,56.000 L30.1000,23.049 L40.1000,23.049 L40.1000,7.982 Z"/>
            <title>Hold the input listed prior to this icon</title>
        </svg>
        `;
    }

    get360Icon()
    {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon360" viewbox="0 0 81 80">
            <path class="colorMoveMiscBright" fill-rule="evenodd" d="M40.023,12.585 C54.239,12.585 65.764,24.561 65.764,39.334 C65.764,54.108 54.239,66.084 40.023,66.084 C25.807,66.084 14.283,54.108 14.283,39.334 C14.283,24.561 25.807,12.585 40.023,12.585 Z"/>
            <path class="colorMoveMiscDark" fill-rule="evenodd" d="M39.580,15.146 C52.565,15.146 63.092,26.086 63.092,39.580 C63.092,53.074 52.565,64.013 39.580,64.013 C26.596,64.013 16.069,53.074 16.069,39.580 C16.069,26.086 26.596,15.146 39.580,15.146 Z"/>
            <path class="colorMoveMiscBright" fill-rule="evenodd" d="M40.000,34.963 C40.000,34.963 80.295,34.814 80.295,34.963 C80.295,46.075 77.867,80.000 39.000,80.000 C15.144,80.000 0.000,59.244 0.000,40.000 C0.000,18.987 15.940,-0.000 39.000,-0.000 C59.270,-0.000 68.206,10.786 68.206,10.786 L72.236,7.764 L76.265,25.897 L59.140,20.860 L62.162,17.838 C62.162,17.838 53.529,8.772 38.993,8.772 C24.456,8.772 8.772,21.694 8.772,40.000 C8.772,58.306 24.054,71.228 38.993,71.228 C67.185,71.228 71.228,44.029 71.228,44.029 L40.000,44.029 L40.000,34.963 Z"/>
            <title>A 360-degree directional input (A 270 degree rotation is sufficient unless two of these are listed in succession - 540 degrees will work in those cases)</title>
        </svg>
        `;
    }

    getNeutralIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconNeutral" viewbox="0 0 101 101">
                <path class="colorMoveMiscBright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
                <path class="colorMoveMiscDark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
                <path class="colorMoveMiscBright" fill-rule="evenodd" d="M31.000,14.000 L43.000,14.000 L57.000,56.000 L58.000,14.000 L72.000,14.000 L72.000,83.1000 L57.000,83.1000 L43.000,49.1000 L43.000,84.1000 L29.1000,84.1000 L31.000,14.000 Z"/>
                <title>No directional input (neutral)</title>
            </svg>
        `;
    }

    getPlusIcon(aTitleOverride = null)
    {
        let titleText = aTitleOverride != null ? aTitleOverride : "Buttons prior to and following this icon must be pressed together.";

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPlus" viewbox="0 0 64 64">
                <path class="colorMoveMisc" fill-rule="evenodd" d="M26.000,-0.000 L37.1000,-0.000 C40.209,-0.000 41.1000,1.791 41.1000,3.1000 L41.1000,60.000 C41.1000,62.209 40.209,64.000 37.1000,64.000 L26.000,64.000 C23.791,64.000 22.000,62.209 22.000,60.000 L22.000,3.1000 C22.000,1.791 23.791,-0.000 26.000,-0.000 Z"/>
                <path class="colorMoveMisc" fill-rule="evenodd" d="M64.000,26.000 L64.000,37.1000 C64.000,40.209 62.209,41.1000 60.000,41.1000 L3.1000,41.1000 C1.791,41.1000 -0.000,40.209 -0.000,37.1000 L-0.000,26.000 C-0.000,23.791 1.791,22.000 3.1000,22.000 L60.000,22.000 C62.209,22.000 64.000,23.791 64.000,26.000 Z"/>
                <title>${titleText}</title>
            </svg>        
        `
    }

    getAttackIcon(aStrength)
    {
        let colorPrefix = this.getColorPrefix(aStrength);

        let titleText = "Any Attack Button";

        switch(aStrength)
        {
            case MOVE_STRENGTH_LIGHT:
                titleText = "Light Attack";
                break;
            case MOVE_STRENGTH_MEDIUM:
                titleText = "Medium Attack";
                break;
            case MOVE_STRENGTH_HEAVY:
                titleText = "Heavy Attack";
                break;
        }

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPunchKick" viewbox="0 0 100 100">
                <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
                <path class="colorMove${colorPrefix}Dark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
                <title>${titleText}</title>
            </svg>
        `;        
    }
    
    getPunchIcon(aStrength)
    {
        let colorPrefix = this.getColorPrefix(aStrength, true);

        let titleText = "Any Punch Button";

        switch(aStrength)
        {
            case MOVE_STRENGTH_LIGHT:
                titleText = "Light Punch";
                break;
            case MOVE_STRENGTH_MEDIUM:
                titleText = "Medium Punch";
                break;
            case MOVE_STRENGTH_HEAVY:
                titleText = "Heavy Punch";
                break;
        }

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPunchKick" viewbox="0 0 100 100">
                <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
                <path class="colorMove${colorPrefix}Dark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
                <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M79.966,62.024 L90.000,76.000 C90.000,76.000 85.090,84.399 77.000,90.000 C68.358,95.983 56.000,98.000 56.000,98.000 C56.000,98.000 46.142,82.640 43.888,82.640 C41.634,82.640 38.261,87.644 36.157,87.794 C34.053,87.944 28.426,80.642 28.426,77.486 C28.426,74.330 64.504,58.072 64.504,56.870 C64.504,55.668 63.730,54.894 61.927,54.293 C60.124,53.692 53.572,59.447 51.619,59.447 C49.665,59.447 46.615,50.341 46.465,49.139 C46.315,47.937 71.205,33.677 74.812,33.677 C78.418,33.677 88.148,52.490 87.697,54.293 C87.246,56.096 79.966,62.024 79.966,62.024 ZM51.000,20.000 L59.1000,14.1000 L71.000,30.000 L59.1000,35.000 L51.000,20.000 ZM46.1000,42.1000 L37.000,26.1000 L45.1000,21.1000 L55.000,37.1000 L46.1000,42.1000 ZM39.1000,47.1000 L47.1000,60.1000 L40.1000,65.000 L21.1000,36.1000 L32.000,30.000 L42.1000,45.1000 L39.1000,47.1000 ZM26.1000,74.000 L8.1000,47.000 L19.000,40.000 L38.000,67.1000 L26.1000,74.000 Z"/>
                <title>${titleText}</title>
            </svg>
        `;
    }

    getKickIcon(aStrength)
    {
        let colorPrefix = this.getColorPrefix(aStrength, true);

        let titleText = "Any Kick Button";

        switch(aStrength)
        {
            case MOVE_STRENGTH_LIGHT:
                titleText = "Light Kick";
                break;
            case MOVE_STRENGTH_MEDIUM:
                titleText = "Medium Kick";
                break;
            case MOVE_STRENGTH_HEAVY:
                titleText = "Heavy Kick";
                break;
        }

        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPunchKick" viewbox="0 0 100 100">
            <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
            <path class="colorMove${colorPrefix}Dark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
            <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M89.1000,28.000 C88.690,28.000 67.131,49.528 61.1000,49.1000 C56.869,50.472 46.1000,49.896 43.1000,47.1000 C41.000,46.104 37.551,42.700 36.000,41.1000 C34.449,41.300 28.432,39.106 26.1000,37.000 C25.568,34.894 19.573,24.929 15.000,27.000 C10.427,29.071 10.439,36.915 14.000,41.000 C17.561,45.085 18.984,46.724 18.1000,51.000 C19.016,55.276 18.248,56.135 22.1000,59.1000 C27.752,63.865 44.116,77.818 44.1000,80.1000 C45.884,84.182 43.714,94.441 58.000,94.1000 C67.437,95.688 70.894,83.070 74.000,78.1000 C77.106,74.930 87.531,66.357 91.1000,62.1000 C96.469,59.643 101.278,53.619 98.000,41.1000 C94.722,30.381 91.310,28.000 89.1000,28.000 Z"/>
            <title>${titleText}</title>
        </svg>
        `;
    }

    parseClassicMoveString(aInputString)
    {
        let output = "";
        let charList = aInputString.split('');
        for (const curChar of charList)
        {
            switch(curChar)
            {
                case "1":
                    output += this.getArrowIcon(-45);
                    break;
                case "2":
                    output += this.getArrowIcon(-90);
                    break;
                case "3":
                    output += this.getArrowIcon(-135);
                    break;
                case "4":
                    output += this.getArrowIcon(0);
                    break;
                case "5":
                    output += this.getNeutralIcon();
                    break;
                case "6":
                    output += this.getArrowIcon(180);
                    break;
                case "7":
                    output += this.getArrowIcon(45);
                    break;
                case "8":
                    output += this.getArrowIcon(90);
                    break;
                case "9":
                    output += this.getArrowIcon(135);
                    break;
                case "p":
                    output += this.getPunchIcon(MOVE_STRENGTH_ANY);
                    break;
                case "k":
                    output += this.getKickIcon(MOVE_STRENGTH_ANY);
                    break;
                case "q":
                    output += this.getPunchIcon(MOVE_STRENGTH_LIGHT) + "L";
                    break;
                case "w":
                    output += this.getPunchIcon(MOVE_STRENGTH_MEDIUM) + "M";
                    break;
                case "e":
                    output += this.getPunchIcon(MOVE_STRENGTH_HEAVY) + "H";
                    break;
                case "a":
                    output += this.getKickIcon(MOVE_STRENGTH_LIGHT) + "L";
                    break;
                case "s":
                    output += this.getKickIcon(MOVE_STRENGTH_MEDIUM) + "M";
                    break;
                case "d":
                    output += this.getKickIcon(MOVE_STRENGTH_HEAVY) + "H";
                    break;
                case "+":
                    output += this.getPlusIcon();
                    break;
                case "\\":
                    output += `<div class="iconOr" title="The input before or after can be used as part of this command.">or</div>`;
                    break;
                case ">":
                    output += this.getCancelArrowIcon();
                    break;
                case "o":
                    output += this.get360Icon();
                    break;
                case "-":
                    output += "(No input)";
                    break;
                case "c":
                    output += this.getHoldIcon();
                    break;
                default:
                    output += curChar;
                    break;
            }
        }
        return output;
    }

    parseModernMoveString(aInputString)
    {
        let output = "";
        let charList = aInputString.split('');
        for (const curChar of charList)
        {
            switch(curChar)
            {
                case "1":
                    output += this.getArrowIcon(-45);
                    break;
                case "2":
                    output += this.getArrowIcon(-90);
                    break;
                case "3":
                    output += this.getArrowIcon(-135);
                    break;
                case "4":
                    output += this.getArrowIcon(0);
                    break;
                case "5":
                    output += this.getNeutralIcon();
                    break;
                case "6":
                    output += this.getArrowIcon(180);
                    break;
                case "7":
                    output += this.getArrowIcon(45);
                    break;
                case "8":
                    output += this.getArrowIcon(90);
                    break;
                case "9":
                    output += this.getArrowIcon(135);
                    break;
                case "l":
                    output += this.getAttackIcon(MOVE_STRENGTH_LIGHT) + "L";
                    break;
                case "m":
                    output += this.getAttackIcon(MOVE_STRENGTH_MEDIUM) + "M";
                    break;
                case "h":
                    output += this.getAttackIcon(MOVE_STRENGTH_HEAVY) + "H";
                    break;
                case "+":
                    output += this.getPlusIcon();
                    break;
                case "\\":
                    output += `<div class="iconOr" title="The input before or after can be used as part of this command.">or</div>`;
                    break;
                case ">":
                    output += this.getCancelArrowIcon();
                    break;
                case "u":
                    output += this.getAutoIcon();
                    break;
                case "c":
                    output += this.getHoldIcon();
                    break;
                case "s":
                    output += this.getSpecialIcon();
                    break;
                case "d":
                    output += this.getDriveParryIcon();
                    break;
                case "i":
                    output += this.getDriveImpactIcon();
                    break;
                case "y":
                    output += this.getAttackIcon(MOVE_STRENGTH_ANY);
                    break;
                default:
                    output += curChar;
                    break;
            }
        }
        return output;
    }

    getParsedNoteString(aInput)
    {
        aInput = aInput.replace("[e]", this.getKickIcon(MOVE_STRENGTH_HEAVY));
        return aInput.replace("[d]", this.getKickIcon(MOVE_STRENGTH_HEAVY));
    }

    getParsedMoveString(aMove)
    {
        if (this.config.controlScheme == CONTROLS_CLASSIC)
            return this.parseClassicMoveString(aMove.inputClassic);
        else
            return this.parseModernMoveString(aMove.inputModern);
    }

    isMoveValidForControlScheme(aMove)
    {
        return ((this.config.controlScheme == CONTROLS_CLASSIC && aMove.inputClassic != null) || (this.config.controlScheme == CONTROLS_MODERN && aMove.inputModern != null));
    }

    getMoveList(aCharacter, aType = -1)
    {
        let moves = [];

        for (const curMove of moveData)
        {
            if (curMove.character == aCharacter && (aType == -1 || curMove.moveType == aType) && this.isMoveValidForControlScheme(curMove))
            {
                moves.push(curMove);
            }
        }

        return moves;
    }

    outputFullMoveList(aCharacter)
    {
        let output = "";
        for (let i = 0; i < moveTypeNames.length; i++)
        {
            
            let moveList = this.getMoveList(aCharacter, i);


            if (moveList.length > 0)
                output += `<div class="moveListHeader">${moveTypeNames[i]}</div>`;

            for (const curMove of moveList)
            {
                let notesString = "";
                for (const curNote of curMove.notes)
                {
                    if (notesString.length > 0)
                    {
                        notesString += " ";
                    }
                    notesString += `(${curNote})`;
                }

                let notesDiv = "";

                if (notesString.length > 0)
                {
                    notesDiv = `<div class="moveNotes">${this.getParsedNoteString(notesString)}</div>`;
                }

                let meterCostDiv = "";

                if (curMove.costDrive != 0 || curMove.costSuper > 0)
                {
                    meterCostDiv = this.getMeterCostContainer(curMove);
                }

                let nameMeterCostClass = "";

                if (curMove.costDrive != 0 && curMove.costSuper > 0)
                {
                    nameMeterCostClass = " moveNameHasBothMeterCost";
                }
                else if (curMove.costDrive != 0 || curMove.costSuper > 0)
                {
                    nameMeterCostClass = " moveNameHasMeterCost";
                }

                let inputString = this.getParsedMoveString(curMove);
                output += `
                <div class="moveContainer">
                    <div class="moveName${nameMeterCostClass}">${curMove.name}</div>
                    <div class="moveInput">${inputString}</div>
                    ${notesDiv}
                    ${meterCostDiv}                        
                </div>
                `;
            }
        }

        this.moveListContent.innerHTML = output;
    }

    saveConfig()
    {
        localStorage.setItem("SF6QuickReferenceConfig", JSON.stringify(this.config));
    }

    onCharacterSelected()
    {
        this.config.selectedCharacter = parseInt(this.characterSelection.value);
        this.saveConfig();
        this.outputFullMoveList(this.config.selectedCharacter);
    }

    gotoMoveList()
    {
        this.moveListContent.scrollIntoView(true);
    }

    onInputModernSelected()
    {
        this.config.controlScheme = CONTROLS_MODERN;
        this.saveConfig();
        this.updateInputModeButtonSelected();
        this.outputFullMoveList(this.config.selectedCharacter);
    }

    onInputClassicSelected()
    {
        this.config.controlScheme = CONTROLS_CLASSIC;
        this.saveConfig();
        this.updateInputModeButtonSelected();
        this.outputFullMoveList(this.config.selectedCharacter);
    }

    updateInputModeButtonSelected()
    {
        if (this.config.controlScheme == CONTROLS_CLASSIC)
        {
            this.buttonModeSelectClassic.classList.add("selected");
            this.buttonModeSelectModern.classList.remove("selected");
        }
        else
        {
            this.buttonModeSelectModern.classList.add("selected");
            this.buttonModeSelectClassic.classList.remove("selected");
        }
    }

    loadConfig()
    {
        this.config = configDefault;
        let localConfig = localStorage.getItem("SF6QuickReferenceConfig");
        if (localConfig != null)
        {
            localConfig = JSON.parse(localConfig);
            for (const configProperty in localConfig)
            {
                this.config[configProperty] = localConfig[configProperty];
            }
        }

        this.updateOnFieldChange = false;
        this.characterSelection.value = this.config.selectedCharacter;
        this.updateOnFieldChange = true;
    }

    initialize()
    {
        this.characterSelection = document.getElementById("characterSelection");
        this.moveListContent = document.getElementById("moveListContent");
        this.buttonModeSelectModern = document.getElementById("modeSelectModern");
        this.buttonModeSelectClassic = document.getElementById("modeSelectClassic");
        this.buttonGotoMoveList = document.getElementById("gotoMoveList");
        
        this.updateOnFieldChange = true;

        this.loadConfig();

        this.characterSelection.addEventListener("change", this.onCharacterSelected.bind(this));

        this.buttonModeSelectModern.addEventListener("click", this.onInputModernSelected.bind(this));
        this.buttonModeSelectClassic.addEventListener("click", this.onInputClassicSelected.bind(this));

        this.buttonGotoMoveList.addEventListener("click", this.gotoMoveList.bind(this));
        
        this.updateInputModeButtonSelected();
        this.outputFullMoveList(this.config.selectedCharacter);
    }
}

var toolInstance = new SF6QuickReference();