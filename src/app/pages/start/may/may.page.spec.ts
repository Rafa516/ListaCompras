import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MayPage } from './may.page';

describe('MayPage', () => {
  let component: MayPage;
  let fixture: ComponentFixture<MayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
