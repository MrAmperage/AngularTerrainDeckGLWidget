import { Directive, Inject } from "@angular/core";
import {
  SimpleMeshLayerDirective,
  BaseExtensionDirective,
} from "@mr.amperage/angular-deck.gl";
import TerrainMeshExtension from "../../Extensions/TerrainMeshExtension/TerrainMeshExtension";
@Directive({
  selector: "TerrainMeshExtensionDirective",
})
export default class TerrainMeshExtensionDirective extends BaseExtensionDirective<TerrainMeshExtension> {
  constructor(
    @Inject(SimpleMeshLayerDirective)
    DeckGLLayer: SimpleMeshLayerDirective
  ) {
    super(DeckGLLayer);
  }

  override PrepareExtension(): void {
    this.Extension = new TerrainMeshExtension();
  }
}
