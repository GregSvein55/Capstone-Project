import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UploadItemInterface} from './upload-item-interface';
import {LocalFile} from '../local-file';
import {BaseComponent} from '../../../../base/base-component';

/**
 * Create by: Kevin Baker
 * Date: 2023-02-14
 */
@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadItemComponent extends BaseComponent {

  @Input() uploadItemInterface: UploadItemInterface | undefined;
  @Input() file: LocalFile | undefined;

  constructor(
  ) {
    super();
  }

  removeMe(): void {
    this.uploadItemInterface?.removeMe(this.file);
  }

  formatBytes(bytes: number | undefined, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes || 0) / Math.log(k));
    return parseFloat(((bytes || 0) / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}