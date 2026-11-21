#!/usr/bin/env python3
"""CLI generator for CSE7000 Internship Report templates based on JSON metadata."""
import json
import argparse
from pathlib import Path

TEMPLATE = """# A REPORT ON {internship_title}

**Submitted by:** {student_name} ({roll_number})  
**Under the guidance of:** {guide_name}, {guide_designation}  
**Program:** Bachelor of Technology in Computer Science and Engineering ({specialization})  
**Institution:** Presidency University, Bengaluru  
**Date:** {submission_month_year}  

---

## Abstract
This report presents an account of the one-month **{domain}** internship undertaken at **{organization}** ({parent_organization}) from **{start_date}** to **{end_date}** (Candidate ID: `{candidate_id}`).

## Chapters
1. **Introduction**: Overview of {domain} and user-centred/engineering principles.
2. **About {organization}**: Organizational structure and project-based learning model.
3. **Objectives and Scope**: Practical objectives, methodology, and project boundaries.
4. **Tools and Technologies Used**: {tools_list}.
5. **Work Carried Out**: Problem identification, architecture/wireframing, implementation, and iterative review.
6. **Results, Outcomes and Skills Developed**: Major deliverables, skills matrix, and challenges overcome.
7. **Conclusion and Future Scope**: Summary and roadmap for future development.
"""

def main():
    parser = argparse.ArgumentParser(description="Generate internship report markdown from config.")
    parser.add_argument("--config", default="sample_config.json", help="Path to JSON config")
    parser.add_argument("--out", default="GENERATED_REPORT.md", help="Output markdown file")
    args = parser.parse_args()

    data = json.loads(Path(args.config).read_text(encoding="utf-8"))
    output = TEMPLATE.format(**data)
    Path(args.out).write_text(output, encoding="utf-8")
    print(f"Generated {args.out} successfully.")

if __name__ == "__main__":
    main()
