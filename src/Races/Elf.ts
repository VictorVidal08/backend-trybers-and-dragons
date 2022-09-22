import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instance += 1;
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
    return Elf._instance;
  }
}

export default Elf;