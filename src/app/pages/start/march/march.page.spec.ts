import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarchPage } from './march.page';

describe('MarchPage', () => {
  let component: MarchPage;
  let fixture: ComponentFixture<MarchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
