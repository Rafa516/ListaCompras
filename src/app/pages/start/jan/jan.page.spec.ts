import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JanPage } from './jan.page';

describe('JanPage', () => {
  let component: JanPage;
  let fixture: ComponentFixture<JanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
