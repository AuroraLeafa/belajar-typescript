describe("Class", () => {
    class Category{
        _name?: string;
        get name(): string {
            if(this._name){
                return this._name;
            } else {
                return "Unknown"
            }
        }

        set name(value: string){
            if(value !== ""){
                this._name = value;
            }
        }
    }
    
    it("Should support getter and setter", () => {
      const category = new Category();
      console.info(category.name);

      category.name = "Reff";
      console.info(category.name);

      category.name = "";
      console.info(category.name);
    });
  });
  