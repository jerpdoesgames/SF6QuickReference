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
    "Common Moves"
];

class SF6QuickReference
{
    getMeterCostElements(aCost, aIsSuper)
    {
        if (aCost > 0)
            return `<div class="meterCostContainer">${this.getMeterIcon(aIsSuper)} ${aCost}</div>`;
        else if (aCost < 0)
            return `<div class="meterCostContainer meterCostContainerParry">&gt;&gt;${this.getMeterIcon(aIsSuper)}</div>`;
        else
            return "";
    }

    getMeterIcon(aIsSuper = false)
    {
        let superIconClass = aIsSuper ? " iconMeterCostSuper" : "";

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconMeterCost${superIconClass}" viewbox="0 0 178 63">
                <path fill-rule="evenodd" stroke-linecap="butt" stroke-linejoin="miter" d="M9.000,5.1000 L133.000,5.1000 L165.1000,54.000 L39.1000,54.000 L9.000,5.1000 Z"/>
            </svg>
        `;
    }

    getCancelArrowIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconCancelArrow" viewbox="0 0 58 60">
                <path class="colorMoveMisc" fill-rule="evenodd" d="M2.1000,0.000 L57.000,27.1000 C57.000,27.1000 58.000,29.101 58.000,30.000 C58.000,31.084 57.000,32.000 57.000,32.000 L2.1000,59.1000 C2.1000,59.1000 1.748,59.748 0.1000,58.1000 C0.248,58.248 -0.000,57.000 -0.000,57.000 L-0.000,2.1000 C-0.000,2.1000 0.252,1.748 0.1000,1.000 C1.752,0.248 2.1000,0.000 2.1000,0.000 Z"/>
            </svg>
        `;        
    }

    getColorPrefix(aStrength)
    {
        let colorPrefix = NAME_PREFIX_ANY;

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
            </svg>
        `
    }

    getHoldIcon()
    {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconHold" viewbox="0 0 100 102">
            <path class="colorMoveAnyBright" fill-rule="evenodd" d="M50.000,55.000 C77.614,55.000 100.000,65.521 100.000,78.500 C100.000,91.479 80.453,101.1000 50.000,101.1000 C19.547,101.1000 -0.000,91.479 -0.000,78.500 C-0.000,65.521 22.386,55.000 50.000,55.000 Z"/>
            <path class="colorMoveAnyDark" fill-rule="evenodd" d="M47.1000,96.1000 C77.036,96.1000 96.155,90.420 96.000,78.1000 C95.878,70.019 93.000,71.000 93.000,71.000 C93.000,71.000 90.951,60.816 79.000,56.1000 C67.049,53.184 60.000,53.000 60.000,53.000 L57.1000,56.000 C57.723,55.856 72.364,57.804 77.000,60.000 C81.636,62.196 89.000,66.120 89.000,71.000 C89.000,75.880 75.651,86.000 49.1000,86.000 C24.349,86.000 10.1000,75.763 10.1000,71.000 C10.1000,66.237 19.599,59.156 25.1000,57.1000 C32.401,56.844 41.1000,56.000 41.1000,56.000 L39.1000,53.000 C39.1000,53.000 26.194,54.765 16.1000,58.1000 C7.806,63.235 6.1000,71.000 6.1000,71.000 C6.1000,71.000 3.1000,69.984 3.1000,79.1000 C3.1000,87.159 18.964,96.1000 47.1000,96.1000 Z"/>
            <path class="colorMoveAnyBright" fill-rule="evenodd" d="M32.1000,0.982 L67.000,0.982 L67.000,15.049 L82.000,15.049 L50.044,68.000 L17.1000,15.049 L32.1000,15.049 L32.1000,0.982 Z"/>
            <path class="colorMoveAnyDark" fill-rule="evenodd" d="M35.1000,2.982 L64.000,2.982 L64.000,18.049 L77.000,18.049 L50.044,64.000 L21.1000,18.049 L35.1000,18.049 L35.1000,2.982 Z"/>
            <path class="colorMoveUnique" fill-rule="evenodd" d="M40.1000,7.982 L59.000,7.982 L59.000,23.049 L69.000,23.049 L50.044,56.000 L30.1000,23.049 L40.1000,23.049 L40.1000,7.982 Z"/>
        </svg>
        `;
    }

    get360Icon()
    {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon360" viewbox="0 0 81 80">
            <path class="colorMoveAnyBright" fill-rule="evenodd" d="M40.023,12.585 C54.239,12.585 65.764,24.561 65.764,39.334 C65.764,54.108 54.239,66.084 40.023,66.084 C25.807,66.084 14.283,54.108 14.283,39.334 C14.283,24.561 25.807,12.585 40.023,12.585 Z"/>
            <path class="colorMoveAnyDark" fill-rule="evenodd" d="M39.580,15.146 C52.565,15.146 63.092,26.086 63.092,39.580 C63.092,53.074 52.565,64.013 39.580,64.013 C26.596,64.013 16.069,53.074 16.069,39.580 C16.069,26.086 26.596,15.146 39.580,15.146 Z"/>
            <path class="colorMoveAnyBright" fill-rule="evenodd" d="M40.000,34.963 C40.000,34.963 80.295,34.814 80.295,34.963 C80.295,46.075 77.867,80.000 39.000,80.000 C15.144,80.000 0.000,59.244 0.000,40.000 C0.000,18.987 15.940,-0.000 39.000,-0.000 C59.270,-0.000 68.206,10.786 68.206,10.786 L72.236,7.764 L76.265,25.897 L59.140,20.860 L62.162,17.838 C62.162,17.838 53.529,8.772 38.993,8.772 C24.456,8.772 8.772,21.694 8.772,40.000 C8.772,58.306 24.054,71.228 38.993,71.228 C67.185,71.228 71.228,44.029 71.228,44.029 L40.000,44.029 L40.000,34.963 Z"/>
        </svg>
        `;
    }

    getNeutralIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconNeutral" viewbox="0 0 101 101">
                <path class="colorMoveAnyBright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
                <path class="colorMoveAnyDark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
                <path class="colorMoveAnyBright" fill-rule="evenodd" d="M31.000,14.000 L43.000,14.000 L57.000,56.000 L58.000,14.000 L72.000,14.000 L72.000,83.1000 L57.000,83.1000 L43.000,49.1000 L43.000,84.1000 L29.1000,84.1000 L31.000,14.000 Z"/>
            </svg>
        `;
    }

    getPlusIcon()
    {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPlus" viewbox="0 0 64 64">
                <path class="colorMoveMisc" fill-rule="evenodd" d="M26.000,-0.000 L37.1000,-0.000 C40.209,-0.000 41.1000,1.791 41.1000,3.1000 L41.1000,60.000 C41.1000,62.209 40.209,64.000 37.1000,64.000 L26.000,64.000 C23.791,64.000 22.000,62.209 22.000,60.000 L22.000,3.1000 C22.000,1.791 23.791,-0.000 26.000,-0.000 Z"/>
                <path class="colorMoveMisc" fill-rule="evenodd" d="M64.000,26.000 L64.000,37.1000 C64.000,40.209 62.209,41.1000 60.000,41.1000 L3.1000,41.1000 C1.791,41.1000 -0.000,40.209 -0.000,37.1000 L-0.000,26.000 C-0.000,23.791 1.791,22.000 3.1000,22.000 L60.000,22.000 C62.209,22.000 64.000,23.791 64.000,26.000 Z"/>
            </svg>        
        `
    }

    getPunchIcon(aStrength)
    {
        let colorPrefix = this.getColorPrefix(aStrength);

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPunchKick" viewbox="0 0 100 100">
                <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
                <path class="colorMove${colorPrefix}Dark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
                <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M79.966,62.024 L90.000,76.000 C90.000,76.000 85.090,84.399 77.000,90.000 C68.358,95.983 56.000,98.000 56.000,98.000 C56.000,98.000 46.142,82.640 43.888,82.640 C41.634,82.640 38.261,87.644 36.157,87.794 C34.053,87.944 28.426,80.642 28.426,77.486 C28.426,74.330 64.504,58.072 64.504,56.870 C64.504,55.668 63.730,54.894 61.927,54.293 C60.124,53.692 53.572,59.447 51.619,59.447 C49.665,59.447 46.615,50.341 46.465,49.139 C46.315,47.937 71.205,33.677 74.812,33.677 C78.418,33.677 88.148,52.490 87.697,54.293 C87.246,56.096 79.966,62.024 79.966,62.024 ZM51.000,20.000 L59.1000,14.1000 L71.000,30.000 L59.1000,35.000 L51.000,20.000 ZM46.1000,42.1000 L37.000,26.1000 L45.1000,21.1000 L55.000,37.1000 L46.1000,42.1000 ZM39.1000,47.1000 L47.1000,60.1000 L40.1000,65.000 L21.1000,36.1000 L32.000,30.000 L42.1000,45.1000 L39.1000,47.1000 ZM26.1000,74.000 L8.1000,47.000 L19.000,40.000 L38.000,67.1000 L26.1000,74.000 Z"/>
            </svg>
        `;
    }

    getKickIcon(aStrength)
    {
        let colorPrefix = this.getColorPrefix(aStrength);

        return `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconPunchKick" viewbox="0 0 100 100">
            <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M50.330,0.213 C78.063,0.213 100.544,22.695 100.544,50.427 C100.544,78.160 78.063,100.641 50.330,100.641 C22.598,100.641 0.116,78.160 0.116,50.427 C0.116,22.695 22.598,0.213 50.330,0.213 Z"/>
            <path class="colorMove${colorPrefix}Dark" fill-rule="evenodd" d="M50.330,5.184 C75.318,5.184 95.574,25.440 95.574,50.427 C95.574,75.415 75.318,95.671 50.330,95.671 C25.343,95.671 5.087,75.415 5.087,50.427 C5.087,25.440 25.343,5.184 50.330,5.184 Z"/>
            <path class="colorMove${colorPrefix}Bright" fill-rule="evenodd" d="M89.1000,28.000 C88.690,28.000 67.131,49.528 61.1000,49.1000 C56.869,50.472 46.1000,49.896 43.1000,47.1000 C41.000,46.104 37.551,42.700 36.000,41.1000 C34.449,41.300 28.432,39.106 26.1000,37.000 C25.568,34.894 19.573,24.929 15.000,27.000 C10.427,29.071 10.439,36.915 14.000,41.000 C17.561,45.085 18.984,46.724 18.1000,51.000 C19.016,55.276 18.248,56.135 22.1000,59.1000 C27.752,63.865 44.116,77.818 44.1000,80.1000 C45.884,84.182 43.714,94.441 58.000,94.1000 C67.437,95.688 70.894,83.070 74.000,78.1000 C77.106,74.930 87.531,66.357 91.1000,62.1000 C96.469,59.643 101.278,53.619 98.000,41.1000 C94.722,30.381 91.310,28.000 89.1000,28.000 Z"/>
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
                    output += `<div class="iconOr">or</div>`;
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
                case "h":
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
                    output += "↙️";
                    break;
                case "2":
                    output += "⬇️";
                    break;
                case "3":
                    output += "↘️";
                    break;
                case "4":
                    output += "⬅️";
                    break;
                case "5":
                    output += "🇳";
                    break;
                case "6":
                    output += "➡️";
                    break;
                case "7":
                    output += "↖️";
                    break;
                case "8":
                    output += "⬆️";
                    break;
                case "9":
                    output += "↗️";
                    break;
                case "p":
                    output += "🅿️";
                    break;
                case "k":
                    output += "🇰";
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
        return this.parseClassicMoveString(aMove.inputClassic);
    }

    isMoveValidForControlScheme(aMove)
    {
        return true;
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
            output += `<div class="moveListHeader">${moveTypeNames[i]}</div>`;
            let moveList = this.getMoveList(aCharacter, i);

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

                if (curMove.costSuper > 0)
                {
                    meterCostDiv = this.getMeterCostElements(curMove.costSuper, true);
                }
                else if (curMove.costDrive != 0)
                {
                    meterCostDiv = this.getMeterCostElements(curMove.costDrive, false);
                }

                if (curMove.inputClassic != null)
                {
                    let inputString = this.getParsedMoveString(curMove);
                    output += `
                    <div class="moveContainer">
                        <div class="moveName">${curMove.name}</div>
                        <div class="moveInput">${inputString}</div>
                        ${notesDiv}
                        ${meterCostDiv}                        
                    </div>
                    `;
                }

            }
        }

        document.getElementById("moveListContent").innerHTML = output;
    }

    saveConfig()
    {
        localStorage.setItem("SF6QuickReferenceConfig", JSON.stringify(this.config));
    }

    resetConfig()
    {

    }

    onCharacterSelected()
    {
        this.config.selectedCharacter = parseInt(this.characterSelection.value);
        this.saveConfig();
        this.outputFullMoveList(this.config.selectedCharacter);
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
        this.updateOnFieldChange = true;

        this.loadConfig();

        this.characterSelection.addEventListener("change", this.onCharacterSelected.bind(this));
        this.outputFullMoveList(this.config.selectedCharacter);
    }

}

var toolInstance = new SF6QuickReference();