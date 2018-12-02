import * as React from "react";
import * as ReactDOM from "react-dom";
/*
Interfaces describe the shape of a value (i.e. object).
Very similar to using `type` in Flow.

*/

// Something is an IAnmial if it has a name property, and a method called `talk` that returns a string.
// It may or may not have a feet property, and if it does, it will be a number.
interface IAnimal {
  name: string;
  talk: () => string;
  feet?: number;
}

class ActualAnimal implements IAnimal {
  public name: string;
  public feet?: number;
  protected phrase: string;

  constructor(name: string, phrase: string, feet?: number) {
    this.name = name;
    this.phrase = phrase;
    if (feet) {
      this.feet = feet;
    }
  }

  public talk() {
    return this.phrase;
  }
}

const Cat: IAnimal = { name: "Cow", talk: () => "Meow" };
const Cow: IAnimal = { name: "Cow", talk: () => "Moo", feet: 4 };
const Sheep = new ActualAnimal("Sheep", "baahh", 4);

// We could cast this to an IAnimal, but that would lead to errors
const Dog = {};

// Will not compile, as Dog does not contain all the properties of Animal
// const animals: IAnimal[] = [Cat, Cow, Dog, Sheep];

function whatDoesTheAnimalDo(name: string, talk: string) {
  return `${name} goes: ${talk}`;
}

const animalContentContainer = document.querySelector("#animal-content");

animalContentContainer.innerHTML = null;
// animals.forEach(animal => {
//   console.log(whatDoesTheAnimalDo(animal.name, animal.feet));
//   const item = document.createElement("div");
//   item.innerText = whatDoesTheAnimalDo(animal.name, animal.talk());
//   animalContentContainer.appendChild(item);
// });

/* // Uncomment to render with Reactr
function AnimalSComponent() {
  return (
    <React.Fragment>
      {animals.map(animal => (
        <div className="animal">
          <strong>{animal.name}</strong> goes: "<em>{animal.talk()}</em>"
        </div>
      ))}
    </React.Fragment>
  );
}

ReactDOM.render(<AnimalSComponent />, animalContentContainer);
*/
