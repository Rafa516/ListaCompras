import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecPage } from './dec.page';

describe('DecPage', () => {
  let component: DecPage;
  let fixture: ComponentFixture<DecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
