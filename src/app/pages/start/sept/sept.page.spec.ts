import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeptPage } from './sept.page';

describe('SeptPage', () => {
  let component: SeptPage;
  let fixture: ComponentFixture<SeptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
