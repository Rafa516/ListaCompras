import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JunPage } from './jun.page';

describe('JunPage', () => {
  let component: JunPage;
  let fixture: ComponentFixture<JunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
