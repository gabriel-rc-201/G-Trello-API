import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { List } from "./List";
import { v4 as uuid } from "uuid";

@Entity("cards")
class Card {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "owner_list" })
  @ManyToOne(() => List)
  ownerList: string;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Card };
