import {Todo} from './todo';


describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('constructor should work', ()) => {
    let Todo = new Todo ({
      title: 'hi',
      complete: true
    });
    expect(todo.title).toEqual('hi');
    expect(todo.complete).toBeEqual(true);
  }
});
