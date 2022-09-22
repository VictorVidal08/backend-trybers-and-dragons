import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instance += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instance;
  }
}

export default Dwarf;