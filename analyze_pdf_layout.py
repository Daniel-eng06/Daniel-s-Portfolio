import fitz  # PyMuPDF
import sys

pdf_path = r'c:\Users\danie\OneDrive\Desktop\Asset Projects\portfolio\public\images\Daniel Obeng Portfolio.pdf'

try:
    doc = fitz.open(pdf_path)
    
    print(f"Total pages: {len(doc)}")
    print("=" * 80)
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        print(f"\n--- PAGE {page_num + 1} ---")
        print(f"Page size: {page.rect.width} x {page.rect.height} pts")
        
        # Get all images on the page
        image_list = page.get_images()
        print(f"\nNumber of images: {len(image_list)}")
        
        if len(image_list) > 0:
            print("\nImage Details:")
            image_rects = []
            
            for img_index, img in enumerate(image_list):
                xref = img[0]
                
                # Get image bounding boxes
                image_instances = page.get_image_rects(xref)
                
                for inst_index, rect in enumerate(image_instances):
                    print(f"\n  Image {img_index + 1} (instance {inst_index + 1}):")
                    print(f"    Position: x={rect.x0:.2f}, y={rect.y0:.2f}")
                    print(f"    Size: width={rect.width:.2f}, height={rect.height:.2f}")
                    print(f"    Bottom-right: x={rect.x1:.2f}, y={rect.y1:.2f}")
                    
                    image_rects.append({
                        'x0': rect.x0,
                        'y0': rect.y0,
                        'x1': rect.x1,
                        'y1': rect.y1,
                        'width': rect.width,
                        'height': rect.height
                    })
            
            # Analyze layout patterns
            if len(image_rects) > 1:
                print("\n--- LAYOUT ANALYSIS ---")
                
                # Sort by y position to identify rows
                sorted_by_y = sorted(image_rects, key=lambda r: r['y0'])
                
                # Group images into rows (tolerance of 10 pts for same row)
                rows = []
                current_row = [sorted_by_y[0]]
                
                for rect in sorted_by_y[1:]:
                    if abs(rect['y0'] - current_row[0]['y0']) < 10:
                        current_row.append(rect)
                    else:
                        rows.append(current_row)
                        current_row = [rect]
                rows.append(current_row)
                
                print(f"\nNumber of rows: {len(rows)}")
                
                for row_idx, row in enumerate(rows):
                    row_sorted = sorted(row, key=lambda r: r['x0'])
                    print(f"\nRow {row_idx + 1}: {len(row_sorted)} images")
                    
                    for img_idx, img in enumerate(row_sorted):
                        print(f"  Image {img_idx + 1}: x={img['x0']:.2f}, y={img['y0']:.2f}, w={img['width']:.2f}, h={img['height']:.2f}")
                    
                    # Calculate spacing between images in this row
                    if len(row_sorted) > 1:
                        spacings = []
                        for i in range(len(row_sorted) - 1):
                            spacing = row_sorted[i+1]['x0'] - row_sorted[i]['x1']
                            spacings.append(spacing)
                        avg_spacing = sum(spacings) / len(spacings)
                        print(f"  Average horizontal spacing: {avg_spacing:.2f} pts")
                        print(f"  Spacing values: {[f'{s:.2f}' for s in spacings]}")
                
                # Calculate vertical spacing between rows
                if len(rows) > 1:
                    print("\nVertical spacing between rows:")
                    for i in range(len(rows) - 1):
                        # Get bottom of current row
                        current_row_bottom = max(img['y1'] for img in rows[i])
                        # Get top of next row
                        next_row_top = min(img['y0'] for img in rows[i+1])
                        spacing = next_row_top - current_row_bottom
                        print(f"  Between row {i+1} and {i+2}: {spacing:.2f} pts")
        
        # Get text blocks for any captions or labels
        text_blocks = page.get_text("dict")["blocks"]
        print(f"\n\nText blocks found: {len(text_blocks)}")
        
        # Check for any rectangular drawings (borders/frames)
        drawings = page.get_drawings()
        print(f"Drawings/shapes found: {len(drawings)}")
        
        if len(drawings) > 0:
            print("\nShape details:")
            for idx, drawing in enumerate(drawings[:10]):  # Show first 10
                print(f"  Shape {idx + 1}: type={drawing.get('type', 'unknown')}, rect={drawing.get('rect', 'N/A')}")
    
    doc.close()
    
except Exception as e:
    print(f"Error analyzing PDF: {e}", file=sys.stderr)
    import traceback
    traceback.print_exc()
    sys.exit(1)
