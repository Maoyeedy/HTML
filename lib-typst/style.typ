#let cv(author: "", contacts: (), body) = {

  set page(paper: "a4", margin: (x: 2cm, y: 1.8cm))
  set document(author: author, title: author)
  set text(font: "HarmonyOS Sans SC", size: 10.3pt)
  //set text(font: "Linux Libertine", lang: "en")
  
  show heading: it => [
    #pad(bottom: -10pt, [#smallcaps(it.body)])
    #line(length: 100%, stroke: 1pt)
  ]

  align(center)[
    #block(text(weight: 700, 1.6em, author))
  ]

  pad(
    top: 0.5em,
    bottom: 0.5em,
    x: 2em,
    align(center)[
      #grid(
        columns: 4,
        gutter: 1em,
        ..contacts
      )
    ],
  )

  set par(justify: true)
  body
}

#let icon(name, baseline: 1.5pt) = {
  box(
    baseline: baseline,
    height: 10pt,
    image(name)
  )
}

#let exp(place, title, location, time, details) = {
  pad(
    bottom: 10%,
    grid(
      columns: (auto, 1fr),
      align(left)[
        *#place* \
        #emph[#title]
      ],
      align(right)[
        #location \
        #time
      ]
    )
  )
  details
}