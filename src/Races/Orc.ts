import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instance += 1;
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
    return Orc._instance;
  }
}

export default Orc;