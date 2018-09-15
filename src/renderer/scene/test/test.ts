import * as Phaser from 'Phaser'
import { MapManager } from '@renderer/map/manager'
import { Map } from '@renderer/map/map'
import { HeightMap } from '@renderer/map/terrain'

export class TestScene extends Phaser.Scene {
  private map: Map
  constructor (config: Phaser.Scenes.Settings.Config) {
    super(config)
    let manager = new MapManager()
    this.map = manager.create(98001)
  }

  preload () {
    console.dir(HeightMap)
  }
  create () {
    this.cameras.main.zoom = 0.5
    let graphics = this.add.graphics()
    let colorMap = [
      0x489,
      0x0E320F,
      0x163e12,
      0x3f451f,
      0xEeEeEe,
    ]
    for (let i = -256; i < 256; i++) {
      for (let j = -256; j < 256; j++) {
        graphics.fillStyle(colorMap[this.map.heiType(i, j)], 1.0)
        graphics.fillRect(i * 32, j * 32, 32, 32)
        this.map.getTile(i, j).draw(graphics)
      }
    }
  }
  update () {
    let _ = 12
  }

}
