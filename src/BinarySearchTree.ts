class TreeNode<T> {
    value : T;
    left : TreeNode<T> | null;
    right : TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

export class BinarySearchTree<T> {
    private _root : TreeNode<T> | null;

    constructor() {
        this._root = null;
    }

    public add(value : T) : void {
        this._root = this._add(this._root, value);
    }

    private _add(current : TreeNode<T> | null, value : T) : TreeNode<T>{
        if(current == null){
            return new TreeNode<T>(value);
        }
        if(value < current.value){
            current.left = this._add(current.left, value);
        } else if (value > current.value) {
            current.right = this._add(current.right, value);
        } else {
            return current;
        }
        return current;
    }

    public contains(value : T) : boolean{
        return this._contains(this._root, value);
    }

    private _contains(current : TreeNode<T> | null, value : T) : boolean{
        if(current == null) {
            return false;
        }
        if(value == current.value){
            return true;
        }
        if(value < current.value){
            return this._contains(current.left, value);
        } else {
            return this._contains(current.right, value);
        }
    }

    public delete(value : T) : void{
        this._root = this._delete(this._root, value);
    }

    private _delete(current : TreeNode<T> | null, value : T) : TreeNode<T> | null {
        if(current == null){
            return null;
        }
        if(value == current.value){
            if(current.left == null && current.right == null) {
                return null;
            }
            if(current.right == null) {
                return current.left;
            }
            if(current.left == null) {
                return current.right;
            }
            let minValue : T = this._findMinValue(current.right);
            current.value = minValue;
            current.right = this._delete(current.right, minValue);
            return current;
        }
        if(value < current.value) {
            current.left = this._delete(current.left, value);
            return current;
        }
        current.right = this._delete(current.right, value);
        return current;
    }

    private _findMinValue(current : TreeNode<T>) : T {
        if(current.left == null){
            return current.value;
        }else {
            return this._findMinValue(current.left);
        }
    }

    public print(): void{
        this._print(this._root);
        console.log();
    }

    private _print (current : TreeNode<T> | null) : void {
        if(current != null) {
            this._print(current.left);
            process.stdout.write(current.value + " ");
            this._print(current.right);
        }
    }
}