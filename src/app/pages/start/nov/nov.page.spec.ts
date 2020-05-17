import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovPage } from './nov.page';

describe('NovPage', () => {
  let component: NovPage;
  let fixture: ComponentFixture<NovPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
