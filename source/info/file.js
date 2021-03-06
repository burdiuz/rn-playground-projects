import { FILE_TYPE } from '../constants';
import { gistFileTarget, fileLock, fileHistory } from '../settings';
import Info from './info';

class FileInfo extends Info {
  type = FILE_TYPE;

  get file() {
    return this.fs;
  }

  get history() {
    return fileHistory.getValue(this.settings);
  }

  async createHistory() {
    let history = this.history;

    if(!history){
      history = await fileHistory.createHistoryFor(this.fs);

      fileHistory.setValue(this.settings, history);
    }

    return history;
  }

  async getContent() {
    const history = fileHistory.getValue(this.settings);

    if (history && !history.isEmpty()) {
      return history.currentContent;
    }

    return this.fs.read();
  }

  get locked() {
    return fileLock.getValue(this.settings);
  }

  set locked(value) {
    fileLock.setValue(this.settings, value);
  }

  get gistSettings() {
    return gistFileTarget.getValue(this.settings);
  }

  read(encoding) {
    return this.fs.read(encoding);
  }

  write(content, encoding) {
    return this.fs.write(content, encoding);
  }
}

export default FileInfo;
