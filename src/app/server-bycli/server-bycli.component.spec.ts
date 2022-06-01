import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerBycliComponent } from './server-bycli.component';

describe('ServerBycliComponent', () => {
  let component: ServerBycliComponent;
  let fixture: ComponentFixture<ServerBycliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerBycliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerBycliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
