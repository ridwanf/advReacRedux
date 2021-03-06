import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('show the correct text',()=>{
    expect(component).to.contain('React simple starter');
  })

  it('shows a comment box',() =>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list',()=>{
    expect(component.find('.comment-list')).to.exist;
  })
});
