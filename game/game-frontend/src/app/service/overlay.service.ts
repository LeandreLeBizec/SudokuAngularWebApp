import {Injectable} from '@angular/core';
import {ComponentType, Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayRef?: OverlayRef;

  public constructor(private readonly overlay: Overlay) {
  }

  public open(type: ComponentType<any>, closeOnClick: boolean): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const filePreviewPortal = new ComponentPortal(type);

    if (closeOnClick) {
      this.overlayRef.backdropClick().subscribe(_ => {
        this.overlayRef?.dispose();
        this.overlayRef = undefined;
      });
    }

    this.overlayRef.attach(filePreviewPortal);
  }

  public dispose(): void {
    this.overlayRef?.dispose();
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }
}
