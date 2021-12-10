import * as readlineSync from "readline-sync";
import { BinarySearchTree } from "./BinarySearchTree.js";

export class TreeTest{
    private _tree : BinarySearchTree<any>;

    constructor() {
        this._tree = new BinarySearchTree<any>();
    }

    public start() : void {
        while (true) {
            console.clear();
            this._showMenu();
            let answer : string = readlineSync.question('Choose number of operation: ');
            this._runOperation(answer);
            readlineSync.question('Press Enter to continue');
        }
    }
    private _showMenu(): void {
        console.log("1. Add element");
        console.log("2. Delete element");
        console.log("3. Check element");
        console.log("4. Print tree");
    }

    private _runOperation(answer: string) : void {
        switch (answer) {
            case "1":
                this._addElem();
                break;
            case "2":
                this._delElem();
                break;
            case "3":
                this._checkElem();
                break;
            case "4":
                this._tree.print();
                break;
            default:
                console.log("Enter correct number!");
        }
    }

    private _addElem() : void{
        let value : string = readlineSync.question('Enter the value to add: ');
        this._tree.add(value);
        console.log(value + " was added");
    }


    private _delElem() : void{
        let value : string = readlineSync.question('Enter the value to delete: ');
        if(this._tree.contains(value)){
            this._tree.delete(value);
            console.log(value + " was deleted");
        } else {
            console.log("Tree doesn't contains " + value);
        }
    }

    private _checkElem() {
        let value : string = readlineSync.question('Enter the value to check: ');
        if(this._tree.contains(value)){
            console.log("Tree contains " + value);
        }else {
            console.log("Tree doesn't contains " + value);
        }
    }
}