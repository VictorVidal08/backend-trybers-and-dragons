import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instance += 1;
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
    return Halfling._instance;
  }
}

export default Halfling;