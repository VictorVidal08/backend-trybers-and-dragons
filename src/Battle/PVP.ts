import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(player: Fighter, private player2: Fighter) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    } return super.fight();
  }
}

export default PVP;