import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePreviewComponent } from './archive-preview.component';

describe('ArchivePreviewComponent', () => {
  let component: ArchivePreviewComponent;
  let fixture: ComponentFixture<ArchivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
